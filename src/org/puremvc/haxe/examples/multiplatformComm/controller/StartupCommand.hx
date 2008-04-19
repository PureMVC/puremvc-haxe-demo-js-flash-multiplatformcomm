/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
package org.puremvc.haxe.examples.multiplatformComm.controller;

import org.puremvc.haxe.examples.multiplatformComm.view.InputMediator;
import org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator;
import org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;

class StartupCommand extends SimpleCommand
{

	override public function execute( note: INotification ): Void
	{
		facade.registerMediator( new InputMediator() );
		facade.registerMediator( new BoxMediator( BoxMediator.JS_BOX_MEDIATOR, new BoxContainer( BoxContainer.JS_TYPE ) ) );
		facade.registerMediator( new BoxMediator( BoxMediator.FL8_BOX_MEDIATOR, new BoxContainer( BoxContainer.FL8_TYPE ) ) );
		facade.registerMediator( new BoxMediator( BoxMediator.FL9_BOX_MEDIATOR, new BoxContainer( BoxContainer.FL9_TYPE ) ) );
	}
}