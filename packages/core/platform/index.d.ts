﻿/**
 * Contains all kinds of information about the device, its operating system and software.
 */

/* tslint:disable:class-name */

/**
 * Gets a value indicating if the app is running on the Android platform.
 */
export const isAndroid: boolean;

/**
 * Gets a value indicating if the app is running on the iOS platform.
 */
export const isIOS: boolean;

/**
 * Gets a value indicating if the app is running on an Apple platform.
 */
export const isApple: boolean;

/**
 * Gets a value indicating if the app is running on the iOS platform.
 */
export const isVisionOS: boolean;

export * from './common';

/*
 * An object containing device specific information.
 */
export interface IDevice {
	/**
	 * Gets the manufacturer of the device.
	 * For example: "Apple" or "HTC" or "Samsung".
	 */
	manufacturer: string;

	/**
	 * Gets the model of the device.
	 * For example: "Nexus 5" or "iPhone".
	 */
	model: string;

	/**
	 * Gets the OS of the device.
	 * For example: "Android" or "iOS".
	 */
	os: string;

	/**
	 * Gets the OS version.
	 * For example: 4.4.4(android), 8.1(ios)
	 */
	osVersion: string;

	/**
	 * Gets the SDK version.
	 * For example: 19(android), 8.1(ios).
	 */
	sdkVersion: string;

	/**
	 * Gets the type of the current device.
	 * Available values: "Phone", "Tablet".
	 */
	deviceType: 'Phone' | 'Tablet';

	/**
	 * Gets the uuid.
	 * On iOS this will return a new uuid if the application is re-installed on the device.
	 * If you need to receive the same uuid even after the application has been re-installed on the device,
	 * use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid
	 */
	uuid: string;

	/**
	 * Gets the preferred language. For example "en" or "en-US".
	 */
	language: string;

	/**
	 * Gets the preferred region. For example "US".
	 */
	region: string;
}

/**
 * An object containing screen information.
 */
export interface ScreenMetrics {
	/**
	 * Gets the absolute width of the screen in pixels.
	 */
	widthPixels: number;

	/**
	 * Gets the absolute height of the screen in pixels.
	 */
	heightPixels: number;

	/**
	 * Gets the absolute width of the screen in density independent pixels.
	 */
	widthDIPs: number;

	/**
	 * Gets the absolute height of the screen in density independent pixels.
	 */
	heightDIPs: number;

	/**
	 * The logical density of the display. This is a scaling factor for the Density Independent Pixel unit.
	 */
	scale: number;
}

/**
 * An object describing general information about a display.
 */
export class Screen {
	/**
	 * Gets information about the main screen of the current device.
	 */
	static mainScreen: ScreenMetrics;
}

/**
 * An object describing general information about a display.
 *
 * This retains compatibility with NS6
 */
export const screen: Screen;

/**
 * Gets the current device information.
 */
export const Device: IDevice;

/**
 * Gets the current device information.
 *
 * This retains compatibility with NS6
 */
export const device: IDevice;
