/**
 * Description of Comparer.
 *
 * @module Comparer
 * @version v5.0.2
 *
 * @author koen.zigterman
 */

import { Veams } from 'app';
import VeamsComponent from 'veams/src/js/common/component';

const $ = Veams.$;

class Comparer extends VeamsComponent {
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
				'desktop': false,
				'tablet-large': false,
				'tablet-small': false,
				'mobile-large': false,
				'mobile-medium': false,
				'mobile-small': false
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
			version: '5.0.2',
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
			'{{Veams.EVENTS.resize}}': 'preRender',
			'{{Veams.EVENTS.mediachange}}': 'render'
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
	 * Initialize the view and merge options
	 *
	 */
	initialize() {
		this.$topContainer = $(this.options.topContainer, this.$el);
		this.$topContent = $(this.options.topContent, this.$el);
		this.$handle = $(this.options.handle, this.$el);
	}


	/**
	 * Pre-Render method
	 */
	preRender(){
		// Return if module is disabled
		if(this.disabled) return;

		this.elWidth = this.el.clientWidth;
		this.$topContent.css('width', this.elWidth);
	}

	/**
	 * Render method
	 */
	render() {
		if(this.options.disabled[Veams.currentMedia] && !this.disabled){
			this.disabled = true;
			this.resetStyles();
		} else {
			this.disabled = this.options.disabled[Veams.currentMedia];
		}

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
		if(this.disabled || !this.dragging && this.options.dragMode ) return;

		let mousePos = this.getMousePos(e);
		let contentWidth = this.options.topContentRight ? this.elWidth - mousePos : 0 + mousePos;

		this.$topContainer.css('width', contentWidth);
	}

	/**
	 * Reset styles
	 */
	resetStyles(){
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
