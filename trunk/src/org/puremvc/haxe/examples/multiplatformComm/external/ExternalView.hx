/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
package org.puremvc.haxe.examples.multiplatformComm.external;

class ExternalView
{

	#if flash9
	private static var box: flash.display.Sprite;
	#elseif flash8
	private static var box: flash.MovieClip;
	#end
	
	private static var connection: haxe.remoting.ExternalConnection;

	/**
	 * Constructor. Creates ui components and connects with js
	 * through haXe remoting
	 */
	public function new()
	{
		#if flash9
			box = new flash.display.Sprite();
			box.graphics.beginFill( 0x666666 );
			box.y = 10;
			box.graphics.drawRect( 0, 0, 40, 40 );
			flash.Lib.current.addChild( box );
		#elseif flash8
			box = flash.Lib.current.createEmptyMovieClip( "box_mc", 100 );
			box._y = 10;
			box.beginFill( 0x666666 );
			box.moveTo( 0, 0 );
			box.lineTo( 0, 40 );
			box.lineTo( 40, 40 );
			box.lineTo( 40, 0 );
			box.endFill();
		#end

		var context = new haxe.remoting.Context();

		#if flash9
		context.addObject( "ExternalView_fl9", ExternalView );
		#elseif flash8
		context.addObject( "ExternalView_fl8", ExternalView );
		#end

		connection = haxe.remoting.ExternalConnection.jsConnect( "default", context );
	}
	
	/**
	 * Updates the ui.
	 */
	public static function update( val: Int ): Void
	{
		#if flash9
			box.x = val;
		#elseif flash8
			box._x = val;
		#end
	}

	/**
	 * Entry point.
	 */
	public static function main()
	{
		var app = new ExternalView();
	}
}