/**
 * Description of Comparer.
 *
 * @module Comparer
 * @version v1.0.0
 *
 * @author koen.zigterman
 * @refactoring George Bullock
 */

import Component, { ComponentConfig } from '@veams/component';
import $, { VeamsQueryObject } from '@veams/query';

const options = {
	classes: {
		isLoading: 'is-loading'
	},
	disabled: {
		'desktop-l': false,
		'desktop-m': false,
		'desktop-s': false,
		'mobile-l': false,
		'mobile-m': false,
		'mobile-s': false,
		'tablet-l': false,
		'tablet-s': false
	},
	dragMode: true,
	draggClass: 'is-dragging',
	handle: '[data-js-item="comparer-handle"]',
	topContainer: '[data-js-item="comparer-top-container"]',
	topContent: '[data-js-item="comparer-top-content"]',
	topContentRight: false
};

class Comparer extends Component {
	/* =================================================
	* GETTERS & SETTERS
	* ================================================= */

	/**
	 * Get module information
	 */
	static get info() {
		return {
			mod: false,
			vc: true,
			version: '1.0.0'
		};
	}

	/*
	* General Properties
	*/
	private $el = $(this.el);
	private $topContainer = $(this.options.topContainer, this.$el);
	private $topContent = $(this.options.topContent, this.$el);
	private $handle = $(this.options.handle, this.$el);
	private disabled: boolean;
	private elWidth: number;
	private dragging: boolean;

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj: ComponentConfig) {
		super(obj, options);
	}

	/* =================================================
	 * EVENTS
	 * ================================================ */

	/**
	 * Subscribe to global events of Veams or App namespace.
	 */
	get subscribe() {
		return {
			'{{this.context.EVENTS.mediachange}}': 'render',
			'{{this.context.EVENTS.resize}}': 'willMount'
		};
	}

	/**
	 * Bind local events to this.$el.
	 */
	get events() {
		return {
			'mousedown {{this.options.handle}}': 'mouseDown',
			mousemove: 'resizeContainer',
			mouseup: 'mouseUp',
			touchend: 'mouseUp',
			'touchstart {{this.options.handle}}': 'mouseDown'
		};
	}

	/* =================================================
	 * STANDARD METHODS
	 * ================================================= */

	/**
	 * Pre-Render method
	 */
	public willMount() {
		// Return if module is disabled
		if (this.disabled) {
			return;
		}
		this.elWidth = this.el.clientWidth;
		this.$topContent.css('width', `${this.elWidth}px`);
	}

	public didMount() {
		if (this.options.disabled[this.context.currentMedia] && !this.disabled) {
			this.disabled = true;
			this.resetStyles();
		} else {
			this.disabled = this.options.disabled[this.context.currentMedia];
		}

		this.$el.removeClass(this.options.classes.isLoading);
	}

	/**
	 * Render method
	 */
	public render() {
		return this;
	}

	/* =================================================
	 * CUSTOM COMPARER METHODS
	 * ================================================= */

	private mouseDown(e) {
		e.preventDefault();
		this.dragging = true;
		this.$handle.addClass(this.options.draggClass);
	}

	private mouseUp() {
		this.dragging = false;
		this.$handle.addClass(this.options.draggClass);
	}

	/**
	 * Resize top container
	 */
	private resizeContainer(e) {
		// Return if module is disabled or if it is not dragging when dragging mode is enabled
		if (this.disabled || (!this.dragging && this.options.dragMode)) {
			return;
		}
		const mousePos = this.getMousePos(e);
		const contentWidth = this.options.topContentRight ? this.elWidth - mousePos : 0 + mousePos;
		this.$topContainer.css('width', `${contentWidth}px`);
	}

	/**
	 * Reset styles
	 */
	private resetStyles() {
		this.$topContent.removeAttr('style');
		this.$topContainer.removeAttr('style');
	}

	/**
	 * Get mouse position
	 */
	private getMousePos(e) {
		return e.pageX - this.$el.offset().left;
	}
}

export default Comparer;
