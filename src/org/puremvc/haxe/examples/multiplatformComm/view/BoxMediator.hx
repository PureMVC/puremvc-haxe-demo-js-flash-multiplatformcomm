/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
package org.puremvc.haxe.examples.multiplatformComm.view;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer;
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

class BoxMediator extends Mediator
{

	//	more than one mediator of this kind is used, so no static name in this case
	private var _name: String;

	//	constants for mediator names
	public static inline var FL9_BOX_MEDIATOR: String	= "fl9_box_mediator";
	public static inline var JS_BOX_MEDIATOR: String	= "js_box_mediator";
	public static inline var FL8_BOX_MEDIATOR: String	= "fl8_box_mediator";
	
	/**
	 * Constructor.
	 */
	public function new( name: String, viewComponent: BoxContainer )
	{
		super( name, viewComponent );		
		_name = name;
	}

	/**
	 * Handle [INotification]s.
	 */ 
	override public function handleNotification( notification: INotification ): Void
	{
		switch( notification.getName() )
		{
			case MultiplatformFacade.VALUE_SET:
				viewComponent.update( notification.getBody() );
		}	
	}
	
	/**
	 * List the [INotification] names this
	 * [Mediator] is interested in being notified of.
	 */
	override public function listNotificationInterests(): Array<String>
	{
		return [
			MultiplatformFacade.VALUE_SET
		];
	}
	
	/*
	 * Updates the view to a new value
	 */
	public function updateView( val: Int ): Void
	{
		viewComponent.update( val );
	}
	
	/*
	 * Returns the name of the mediator
	 */
	override public function getMediatorName(): String
	{
		return _name;	
	}
}