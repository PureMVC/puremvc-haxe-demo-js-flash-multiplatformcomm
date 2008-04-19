/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

class MultiplatformComm
{
	public function new()
	{
		haxe.Timer.delayed( init, 800 )();
	}
	
	private function init(): Void
	{
		var facade = MultiplatformFacade.getInstance();
		facade.sendNotification( MultiplatformFacade.STARTUP );		
	}

	public static function main(): Void
	{
		var app = new MultiplatformComm();
	}
}