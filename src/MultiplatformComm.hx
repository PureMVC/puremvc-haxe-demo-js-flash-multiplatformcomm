/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

class MultiplatformComm
{
	/**
	 * Constructor.
	 * Starts the application by sending a notification
	 */
	public function new()
	{
		var facade = MultiplatformFacade.getInstance();
		facade.sendNotification( MultiplatformFacade.STARTUP );		
	}
	
	/**
	 * Entry point.
	 */
	public static function main(): Void
	{
		var app = new MultiplatformComm();
	}
}