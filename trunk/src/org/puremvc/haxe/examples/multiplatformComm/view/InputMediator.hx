/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
package org.puremvc.haxe.examples.multiplatformComm.view;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

import js.Dom;

class InputMediator extends Mediator
{
	public static inline var NAME: String = "InputMediator";

	/**
	 * Constructor. Initializes event listeners
	 */
	public function new()
	{
		super();
		js.Lib.document.getElementById( "send_link" ).onclick = onLinkClick;
	}
	
	/**
	 * Click Handler. Checks if input value is acceptable and sends notification
	 */
	private function onLinkClick( evt: js.Event ): Void
	{
		var val = Std.parseInt( cast( js.Lib.document.getElementById( "distance" ) ).value );
		if ( val == null || val < 0 || val > 500 )
			js.Lib.alert( "value should be a number between 0 and 500." );
		else
			facade.sendNotification( MultiplatformFacade.VALUE_SET, val );
	}
	
	/*
	 * Returns the name of the mediator
	 */
	override public function getMediatorName(): String
	{
		return NAME;	
	}
}