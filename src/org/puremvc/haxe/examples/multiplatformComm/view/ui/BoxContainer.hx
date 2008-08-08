/* 
 PureMVC haXe Demo - JavaScript / Flash Multiplatform Comm
 By Marco Secchi <marco.secchi@puremvc.org>
 Copyright(c) 2008 Marco Secchi, Some rights reserved.
 */
package org.puremvc.haxe.examples.multiplatformComm.view.ui;

class BoxContainer
{
	private var _type: String;
	private var _conn: haxe.remoting.ExternalConnection;
	
	public static inline var JS_TYPE: String	= "js_type";
	public static inline var FL9_TYPE: String	= "fl9_type";
	public static inline var FL8_TYPE: String	= "fl8_type";

	/**
	 * Constructor. Creates a flash connection through haxe remoting
	 */
	public function new( t: String )
	{
		_type = t;

		if ( _type == FL9_TYPE )
			_conn = haxe.remoting.ExternalConnection.flashConnect( "default", "haxe_fl9" );
		else if ( _type == FL8_TYPE )
			_conn = haxe.remoting.ExternalConnection.flashConnect( "default", "haxe_fl8" );
	}
	
	/**
	 * Updates the view value (in the case of flash through haxe remoting)
	 */
	public function update( val: Int ): Void
	{
		switch( _type )
		{
			case JS_TYPE:
				js.Lib.document.getElementById( "box" ).style.left = Std.string( val ) + "px";
			case FL9_TYPE:
				_conn.ExternalView_fl9.update.call( [ val ] );
			case FL8_TYPE:
				_conn.ExternalView_fl8.update.call( [ val ] );
		}
	}

}