import Scroller from "../../src/Scroller";
import { scrollTo, scroll } from "../../src/utils";
import ScrollerInjection from "inject-loader!../../src/Scroller";
import { wait } from "./helper/TestHelper";

/* eslint-disable */

[true, false].forEach(horizontal => {
	describe(`Scroller Test(horizontal: ${horizontal})`, function() {
		beforeEach(() => {
			this.el = sandbox();
			this.el.innerHTML = `
			<style>
				body {
					margin: 0;
					padding: 0;
				}
				.wrapper {
					position: relative;
				}
				.view {
					width: 500px;
					height: 400px;
				}
				.container {
					width: 500px;
					height: 400px;
				}
			</style>
			<div class="wrapper">
				<div class="view">
					<div class="container">
					1
					</div>
				</div>
			</div>
			`;
			this.view = this.el.querySelector(".view");
			this.wrapper = this.el.querySelector(".wrapper");
			this.container = this.el.querySelector(".container");
		});
		afterEach(() => {
			this.scroller && this.scroller.destroy();
			cleanup();
		  });
		it (`should check containeroffset with no offset`, () => {
			// Given
			this.scroller = new Scroller(window, {
				container: this.view,
				horizontal,
			});

			// When, Then
			expect(this.scroller._getOffset()).to.be.equals(0);
		});
		it (`should check containeroffset with offset`, () => {
			// Given
			this.wrapper.style[horizontal ? "left" : "top"] = "1000px";
			this.scroller = new Scroller(window, {
				container: this.el.querySelector(".view"),
				horizontal,
			});

			// When, Then
			expect(this.scroller._getOffset()).to.be.equals(1000);
		});
		it (`should check containeroffset with offset and scroll`, () => {

			// Given
			this.wrapper.style[horizontal ? "left" : "top"] = "4000.25px";
			this.scroller = new Scroller(window, {
				container: this.el.querySelector(".view"),
				horizontal,
			});

			// When
			scrollTo(window, horizontal ? 545 : 0, horizontal ? 0 : 545);


			// Then
			expect(scroll(window, horizontal)).to.be.equals(545);
			expect(this.scroller._getOffset()).to.be.equals(4000.25);
		});
		it (`should check containeroffset with offset and scroll`, (done) => {


			// Given
			this.wrapper.style[horizontal ? "left" : "top"] = "4000.25px";
			scrollTo(window, horizontal ? 545 : 0, horizontal ? 0 : 545);
			this.scroller = new Scroller(window, {
				container: this.view,
				horizontal,
			});

			// When
			this.wrapper.style[horizontal ? "left" : "top"] = "2000.25px";

			// Then
			expect(scroll(window, horizontal)).to.be.equals(545);
			expect(this.scroller.getContainerOffset()).to.be.equals(4000.25);

			window.dispatchEvent(new Event("resize"));

			setTimeout(() => {
				expect(scroll(window, horizontal)).to.be.equals(545);
				expect(this.scroller.getContainerOffset()).to.be.equals(2000.25);
				done();
			}, 100);
		});
		[true, false].forEach(IS_IOS => {
			it(`should check scroll test(IS_IOS: ${IS_IOS})`, async () => {
				// Given
				this.view.style[horizontal ? "width" : "height"] = "4000.25px";
				const Scroller2 = ScrollerInjection({
					"./consts": {
						IS_IOS,
					},
				}).default;
				//scrollTo(window, horizontal ? 545 : 0, horizontal ? 0 : 545);

				const spy = sinon.spy();
				scrollTo(window, 0, 0);
				this.scroller = new Scroller2(window, {
					container: this.view,
					horizontal,
					check: spy
				});

				const issue1 = this.scroller._isScrollIssue;

				// When
				this.scroller._prevPos = -1;
				window.dispatchEvent(new Event("scroll"));

				const issue2 = this.scroller._isScrollIssue;

				scrollTo(window, horizontal ? 545 : 0, horizontal ? 0 : 545);
				await wait(500);

				const issue3 = this.scroller._isScrollIssue;
				// Then


				expect(spy.callCount).to.be.equals(IS_IOS ? 1: 2);
				expect(issue1).to.be.equals(IS_IOS);
				expect(issue2).to.be.equals(IS_IOS);
				expect(issue3).to.be.false;
			});
		});
	});
});
