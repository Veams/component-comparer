/**
 * Description of Comparer.
 *
 * @module Comparer
 * @version v1.0.0
 *
 * @author koen.zigterman
 * @refactoring George Bullock
 */

import $ from '@veams/query';
import Component from '@veams/component';

class Comparer extends Component {

	/*
	* General Properties
	*/
	$el = $(this.el);
	$topContainer = $(this.options.topContainer, this.$el);
	$topContent = $(this.options.topContent, this.$el);
	$handle = $(this.options.handle, this.$el);

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			handle: '[data-js-item="comparer-handle"]',
			topContainer: '[data-js-item="comparer-top-container"]',
			topContent: '[data-js-item="comparer-top-content"]',
			draggClass: 'is-dragging',
			dragMode: true,
			topContentRight: false,
			disabled: {
				'mobile-s': false,
				'mobile-m': false,
				'mobile-l': false,
				'tablet-s': false,
				'tablet-l': false,
				'desktop-s': false,
				'desktop-m': false,
				'desktop-l': false
			},
			classes: {
				isLoading: 'is-loading'
			}
		};

		super(obj, options);
	}

	/** =================================================
	 * GETTER & SETTER
	 * ================================================ */

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '1.0.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */

	/**
	 * Subscribe to global events of Veams or App namespace.
	 */
	get subscribe() {
		return {
			'{{this.context.EVENTS.resize}}': 'preRender',
			'{{this.context.EVENTS.mediachange}}': 'render'
		};
	}

	/**
	 * Bind local events to this.$el.
	 */
	get events() {
		return {
			'mousedown {{this.options.handle}}': 'mouseDown',
			'mouseup': 'mouseUp',
			'touchstart {{this.options.handle}}': 'mouseDown',
			'touchend': 'mouseUp',
			'mousemove': 'resizeContainer'
		};
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */

	/**
	 * Pre-Render method
	 */
	preRender() {
		// Return if module is disabled
		if (this.disabled) return;
		this.elWidth = this.el.clientWidth;
		this.$topContent.css('width', `${this.elWidth}px`);
	}

	/**
	 * Render method
	 */
	render() {
		if (this.options.disabled[ this.context.currentMedia ] && !this.disabled) {
			this.disabled = true;
			this.resetStyles();
		} else {
			this.disabled = this.options.disabled[ this.context.currentMedia ];
		}

		this.$el.removeClass((this.options.classes.isLoading));
	}

	/** =================================================
	 * CUSTOM COMPARER METHODS
	 * ================================================= */

	mouseDown(e) {
		e.preventDefault();

		this.dragging = true;
		this.$handle.addClass(this.options.draggClass);
	}

	mouseUp() {
		this.dragging = false;
		this.$handle.addClass(this.options.draggClass);
	}

	/**
	 * Resize top container
	 */
	resizeContainer(e) {
		// Return if module is disabled or if it is not dragging when dragging mode is enabled
		if (this.disabled || !this.dragging && this.options.dragMode) return;

		let mousePos = this.getMousePos(e);
		let contentWidth = this.options.topContentRight ? this.elWidth - mousePos : 0 + mousePos;

		this.$topContainer.css('width', `${contentWidth}px`);
	}

	/**
	 * Reset styles
	 */
	resetStyles() {
		this.$topContent.removeAttr('style');
		this.$topContainer.removeAttr('style');
	}

	/**
	 * Get mouse position
	 */
	getMousePos(e) {
		return (e.pageX - this.$el.offset().left);
	}

}

export default Comparer;
