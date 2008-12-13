$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.interfaces = {}
org.puremvc.haxe.interfaces.IView = function() { }
org.puremvc.haxe.interfaces.IView.__name__ = ["org","puremvc","haxe","interfaces","IView"];
org.puremvc.haxe.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.removeObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.__class__ = org.puremvc.haxe.interfaces.IView;
org.puremvc.haxe.interfaces.INotification = function() { }
org.puremvc.haxe.interfaces.INotification.__name__ = ["org","puremvc","haxe","interfaces","INotification"];
org.puremvc.haxe.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.interfaces.INotification;
haxe = {}
haxe.io = {}
haxe.io.BytesBuffer = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.baseEncode = function(s,base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseEncode: base must be a power of two.";
	var size = Std["int"]((s.length * 8 + nbits - 1) / nbits);
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var mask = ((1 << nbits) - 1);
	var pin = 0;
	while(size-- > 0) {
		while(curbits < nbits) {
			curbits += 8;
			buf <<= 8;
			var t = s.charCodeAt(pin++);
			if(t > 255) throw "baseEncode: bad chars";
			buf |= t;
		}
		curbits -= nbits;
		out.b += String.fromCharCode(base.charCodeAt((buf >> curbits) & mask));
	}
	return out.b;
}
StringTools.baseDecode = function(s,base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseDecode: base must be a power of two.";
	var size = (s.length * 8 + nbits - 1) / nbits;
	var tbl = new Array();
	{
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			tbl[base.charCodeAt(i)] = i;
		}
	}
	var size1 = (s.length * nbits) / 8;
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var pin = 0;
	while(size1-- > 0) {
		while(curbits < 8) {
			curbits += nbits;
			buf <<= nbits;
			var i = tbl[s.charCodeAt(pin++)];
			if(i == -1) throw "baseDecode: bad chars";
			buf |= i;
		}
		curbits -= 8;
		out.b += String.fromCharCode((buf >> curbits) & 255);
	}
	return out.b;
}
StringTools.hex = function(n,digits) {
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
org.puremvc.haxe.core = {}
org.puremvc.haxe.core.View = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.View.instance = this;
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
}}
org.puremvc.haxe.core.View.__name__ = ["org","puremvc","haxe","core","View"];
org.puremvc.haxe.core.View.getInstance = function() {
	if(org.puremvc.haxe.core.View.instance == null) org.puremvc.haxe.core.View.instance = new org.puremvc.haxe.core.View();
	return org.puremvc.haxe.core.View.instance;
}
org.puremvc.haxe.core.View.instance = null;
org.puremvc.haxe.core.View.prototype.hasMediator = function(mediatorName) {
	return this.mediatorMap.exists(mediatorName);
}
org.puremvc.haxe.core.View.prototype.initializeView = function() {
	null;
}
org.puremvc.haxe.core.View.prototype.mediatorMap = null;
org.puremvc.haxe.core.View.prototype.notifyObservers = function(notification) {
	if(this.observerMap.exists(notification.getName())) {
		var iterator = this.observerMap.get(notification.getName()).iterator();
		{ var $it0 = iterator;
		while( $it0.hasNext() ) { var observer = $it0.next();
		observer.notifyObserver(notification);
		}}
	}
}
org.puremvc.haxe.core.View.prototype.observerMap = null;
org.puremvc.haxe.core.View.prototype.registerMediator = function(mediator) {
	this.mediatorMap.set(mediator.getMediatorName(),mediator);
	var interests = mediator.listNotificationInterests();
	if(interests.length > 0) {
		var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(mediator,"handleNotification"),mediator);
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
	}
	mediator.onRegister();
}
org.puremvc.haxe.core.View.prototype.registerObserver = function(notificationName,observer) {
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
}
org.puremvc.haxe.core.View.prototype.removeMediator = function(mediatorName) {
	var mediator = this.mediatorMap.get(mediatorName);
	if(mediator != null) {
		var interests = mediator.listNotificationInterests();
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.removeObserver(interests[i],mediator);
			}
		}
		this.mediatorMap.remove(mediatorName);
		mediator.onRemove();
	}
	return mediator;
}
org.puremvc.haxe.core.View.prototype.removeObserver = function(notificationName,notifyContext) {
	var observers = this.observerMap.get(notificationName);
	{ var $it1 = observers.iterator();
	while( $it1.hasNext() ) { var observer = $it1.next();
	{
		if(observer.compareNotifyContext(notifyContext) == true) {
			observers.remove(observer);
			break;
		}
	}
	}}
	if(observers.isEmpty()) {
		this.observerMap.remove(notificationName);
	}
}
org.puremvc.haxe.core.View.prototype.retrieveMediator = function(mediatorName) {
	return this.mediatorMap.get(mediatorName);
}
org.puremvc.haxe.core.View.prototype.__class__ = org.puremvc.haxe.core.View;
org.puremvc.haxe.core.View.__interfaces__ = [org.puremvc.haxe.interfaces.IView];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it2 = arr.iterator();
	while( $it2.hasNext() ) { var t = $it2.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e3 ) {
		{
			var e = $e3;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e4 ) {
			{
				var e = $e4;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
org.puremvc.haxe.interfaces.IObserver = function() { }
org.puremvc.haxe.interfaces.IObserver.__name__ = ["org","puremvc","haxe","interfaces","IObserver"];
org.puremvc.haxe.interfaces.IObserver.prototype.compareNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.notifyObserver = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyMethod = null;
org.puremvc.haxe.interfaces.IObserver.prototype.__class__ = org.puremvc.haxe.interfaces.IObserver;
org.puremvc.haxe.patterns = {}
org.puremvc.haxe.patterns.observer = {}
org.puremvc.haxe.patterns.observer.Observer = function(notifyMethod,notifyContext) { if( notifyMethod === $_ ) return; {
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
}}
org.puremvc.haxe.patterns.observer.Observer.__name__ = ["org","puremvc","haxe","patterns","observer","Observer"];
org.puremvc.haxe.patterns.observer.Observer.prototype.compareNotifyContext = function(object) {
	return object == this.context;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.context = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyContext = function() {
	return this.context;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyMethod = function() {
	return $closure(this,"notify");
}
org.puremvc.haxe.patterns.observer.Observer.prototype.notify = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.notifyObserver = function(notification) {
	(this.getNotifyMethod())(notification);
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyContext = function(notifyContext) {
	this.context = notifyContext;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyMethod = function(notifyMethod) {
	this.notify = notifyMethod;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.__class__ = org.puremvc.haxe.patterns.observer.Observer;
org.puremvc.haxe.patterns.observer.Observer.__interfaces__ = [org.puremvc.haxe.interfaces.IObserver];
org.puremvc.haxe.interfaces.IFacade = function() { }
org.puremvc.haxe.interfaces.IFacade.__name__ = ["org","puremvc","haxe","interfaces","IFacade"];
org.puremvc.haxe.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.IFacade.prototype.__class__ = org.puremvc.haxe.interfaces.IFacade;
org.puremvc.haxe.patterns.facade = {}
org.puremvc.haxe.patterns.facade.Facade = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.facade.Facade.instance = this;
	this.initializeFacade();
}}
org.puremvc.haxe.patterns.facade.Facade.__name__ = ["org","puremvc","haxe","patterns","facade","Facade"];
org.puremvc.haxe.patterns.facade.Facade.getInstance = function() {
	if(org.puremvc.haxe.patterns.facade.Facade.instance == null) org.puremvc.haxe.patterns.facade.Facade.instance = new org.puremvc.haxe.patterns.facade.Facade();
	return org.puremvc.haxe.patterns.facade.Facade.instance;
}
org.puremvc.haxe.patterns.facade.Facade.instance = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.controller = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.hasCommand = function(notificationName) {
	return this.controller.hasCommand(notificationName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasMediator = function(mediatorName) {
	return this.view.hasMediator(mediatorName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasProxy = function(proxyName) {
	return this.model.hasProxy(proxyName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController = function() {
	if(this.controller != null) return;
	this.controller = org.puremvc.haxe.core.Controller.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeFacade = function() {
	this.initializeModel();
	this.initializeController();
	this.initializeView();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeModel = function() {
	if(this.model != null) return;
	this.model = org.puremvc.haxe.core.Model.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeView = function() {
	if(this.view != null) return;
	this.view = org.puremvc.haxe.core.View.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.model = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.notifyObservers = function(notification) {
	if(this.view != null) this.view.notifyObservers(notification);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerCommand = function(notificationName,commandClassRef) {
	this.controller.registerCommand(notificationName,commandClassRef);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerMediator = function(mediator) {
	if(this.view != null) this.view.registerMediator(mediator);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerProxy = function(proxy) {
	this.model.registerProxy(proxy);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeCommand = function(notificationName) {
	this.controller.removeCommand(notificationName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeMediator = function(mediatorName) {
	var mediator = null;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	return mediator;
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	var proxy = null;
	if(this.model != null) proxy = this.model.removeProxy(proxyName);
	return proxy;
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveMediator = function(mediatorName) {
	return this.view.retrieveMediator(mediatorName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveProxy = function(proxyName) {
	return this.model.retrieveProxy(proxyName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.sendNotification = function(notificationName,body,type) {
	this.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(notificationName,body,type));
}
org.puremvc.haxe.patterns.facade.Facade.prototype.view = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.__class__ = org.puremvc.haxe.patterns.facade.Facade;
org.puremvc.haxe.patterns.facade.Facade.__interfaces__ = [org.puremvc.haxe.interfaces.IFacade];
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = "";
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b += x;
}
StringBuf.prototype.addChar = function(c) {
	this.b += String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b += s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b;
}
StringBuf.prototype.__class__ = StringBuf;
org.puremvc.haxe.interfaces.INotifier = function() { }
org.puremvc.haxe.interfaces.INotifier.__name__ = ["org","puremvc","haxe","interfaces","INotifier"];
org.puremvc.haxe.interfaces.INotifier.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.INotifier.prototype.__class__ = org.puremvc.haxe.interfaces.INotifier;
org.puremvc.haxe.patterns.observer.Notifier = function(p) { if( p === $_ ) return; {
	this.facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
}}
org.puremvc.haxe.patterns.observer.Notifier.__name__ = ["org","puremvc","haxe","patterns","observer","Notifier"];
org.puremvc.haxe.patterns.observer.Notifier.prototype.facade = null;
org.puremvc.haxe.patterns.observer.Notifier.prototype.sendNotification = function(notificationName,body,type) {
	this.facade.sendNotification(notificationName,body,type);
}
org.puremvc.haxe.patterns.observer.Notifier.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notifier;
org.puremvc.haxe.patterns.observer.Notifier.__interfaces__ = [org.puremvc.haxe.interfaces.INotifier];
org.puremvc.haxe.interfaces.ICommand = function() { }
org.puremvc.haxe.interfaces.ICommand.__name__ = ["org","puremvc","haxe","interfaces","ICommand"];
org.puremvc.haxe.interfaces.ICommand.prototype.execute = null;
org.puremvc.haxe.interfaces.ICommand.prototype.__class__ = org.puremvc.haxe.interfaces.ICommand;
org.puremvc.haxe.patterns.command = {}
org.puremvc.haxe.patterns.command.SimpleCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
}}
org.puremvc.haxe.patterns.command.SimpleCommand.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommand"];
org.puremvc.haxe.patterns.command.SimpleCommand.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.execute = function(notification) {
	null;
}
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommand;
org.puremvc.haxe.patterns.command.SimpleCommand.__interfaces__ = [org.puremvc.haxe.interfaces.ICommand];
org.puremvc.haxe.examples = {}
org.puremvc.haxe.examples.multiplatformComm = {}
org.puremvc.haxe.examples.multiplatformComm.controller = {}
org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand.__name__ = ["org","puremvc","haxe","examples","multiplatformComm","controller","StartupCommand"];
org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand.prototype.execute = function(note) {
	this.facade.registerMediator(new org.puremvc.haxe.examples.multiplatformComm.view.InputMediator());
	this.facade.registerMediator(new org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator("js_box_mediator",new org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer("js_type")));
	this.facade.registerMediator(new org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator("fl8_box_mediator",new org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer("fl8_type")));
	this.facade.registerMediator(new org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator("fl9_box_mediator",new org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer("fl9_type")));
}
org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand.prototype.__class__ = org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand;
org.puremvc.haxe.interfaces.IMediator = function() { }
org.puremvc.haxe.interfaces.IMediator.__name__ = ["org","puremvc","haxe","interfaces","IMediator"];
org.puremvc.haxe.interfaces.IMediator.prototype.getMediatorName = null;
org.puremvc.haxe.interfaces.IMediator.prototype.getViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.handleNotification = null;
org.puremvc.haxe.interfaces.IMediator.prototype.listNotificationInterests = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IMediator.prototype.setViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.__class__ = org.puremvc.haxe.interfaces.IMediator;
org.puremvc.haxe.patterns.mediator = {}
org.puremvc.haxe.patterns.mediator.Mediator = function(mediatorName,viewComponent) { if( mediatorName === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.mediatorName = (mediatorName != null?mediatorName:org.puremvc.haxe.patterns.mediator.Mediator.NAME);
	if(viewComponent != null) this.viewComponent = viewComponent;
}}
org.puremvc.haxe.patterns.mediator.Mediator.__name__ = ["org","puremvc","haxe","patterns","mediator","Mediator"];
org.puremvc.haxe.patterns.mediator.Mediator.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.mediator.Mediator.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getMediatorName = function() {
	return this.mediatorName;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getViewComponent = function() {
	return this.viewComponent;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.handleNotification = function(notification) {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.listNotificationInterests = function() {
	return [];
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.mediatorName = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRegister = function() {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRemove = function() {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.setViewComponent = function(viewComponent) {
	this.viewComponent = viewComponent;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.viewComponent = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.__class__ = org.puremvc.haxe.patterns.mediator.Mediator;
org.puremvc.haxe.patterns.mediator.Mediator.__interfaces__ = [org.puremvc.haxe.interfaces.IMediator];
org.puremvc.haxe.examples.multiplatformComm.view = {}
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[]);
	js.Lib.document.getElementById("send_link").onclick = $closure(this,"onLinkClick");
}}
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.__name__ = ["org","puremvc","haxe","examples","multiplatformComm","view","InputMediator"];
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.prototype.getMediatorName = function() {
	return "InputMediator";
}
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.prototype.onLinkClick = function(evt) {
	var val = Std.parseInt(js.Lib.document.getElementById("distance").value);
	if(val == null || val < 0 || val > 500) js.Lib.alert("value should be a number between 0 and 500.");
	else this.facade.sendNotification("value_set",val);
}
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.prototype.__class__ = org.puremvc.haxe.examples.multiplatformComm.view.InputMediator;
org.puremvc.haxe.interfaces.IController = function() { }
org.puremvc.haxe.interfaces.IController.__name__ = ["org","puremvc","haxe","interfaces","IController"];
org.puremvc.haxe.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.__class__ = org.puremvc.haxe.interfaces.IController;
org.puremvc.haxe.core.Controller = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.Controller.instance = this;
	this.commandMap = new Hash();
	this.initializeController();
}}
org.puremvc.haxe.core.Controller.__name__ = ["org","puremvc","haxe","core","Controller"];
org.puremvc.haxe.core.Controller.getInstance = function() {
	if(org.puremvc.haxe.core.Controller.instance == null) org.puremvc.haxe.core.Controller.instance = new org.puremvc.haxe.core.Controller();
	return org.puremvc.haxe.core.Controller.instance;
}
org.puremvc.haxe.core.Controller.instance = null;
org.puremvc.haxe.core.Controller.prototype.commandMap = null;
org.puremvc.haxe.core.Controller.prototype.executeCommand = function(note) {
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) return;
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.execute(note);
}
org.puremvc.haxe.core.Controller.prototype.hasCommand = function(notificationName) {
	return this.commandMap.exists(notificationName);
}
org.puremvc.haxe.core.Controller.prototype.initializeController = function() {
	this.view = org.puremvc.haxe.core.View.getInstance();
}
org.puremvc.haxe.core.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
}
org.puremvc.haxe.core.Controller.prototype.removeCommand = function(notificationName) {
	if(this.hasCommand(notificationName)) {
		this.view.removeObserver(notificationName,this);
		this.commandMap.remove(notificationName);
	}
}
org.puremvc.haxe.core.Controller.prototype.view = null;
org.puremvc.haxe.core.Controller.prototype.__class__ = org.puremvc.haxe.core.Controller;
org.puremvc.haxe.core.Controller.__interfaces__ = [org.puremvc.haxe.interfaces.IController];
org.puremvc.haxe.interfaces.IModel = function() { }
org.puremvc.haxe.interfaces.IModel.__name__ = ["org","puremvc","haxe","interfaces","IModel"];
org.puremvc.haxe.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.interfaces.IModel;
haxe.remoting = {}
haxe.remoting.Connection = function() { }
haxe.remoting.Connection.__name__ = ["haxe","remoting","Connection"];
haxe.remoting.Connection.prototype.call = null;
haxe.remoting.Connection.prototype.resolve = null;
haxe.remoting.Connection.prototype.__class__ = haxe.remoting.Connection;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e5 ) {
		{
			var e = $e5;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it6 = it;
	while( $it6.hasNext() ) { var i = $it6.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	return s.b;
}
Hash.prototype.__class__ = Hash;
haxe.remoting.ExternalConnection = function(data,path) { if( data === $_ ) return; {
	this.__data = data;
	this.__path = path;
}}
haxe.remoting.ExternalConnection.__name__ = ["haxe","remoting","ExternalConnection"];
haxe.remoting.ExternalConnection.escapeString = function(s) {
	return s;
}
haxe.remoting.ExternalConnection.doCall = function(name,path,params) {
	try {
		var cnx = haxe.remoting.ExternalConnection.connections.get(name);
		if(cnx == null) throw "Unknown connection : " + name;
		if(cnx.__data.ctx == null) throw "No context shared for the connection " + name;
		var params1 = new haxe.Unserializer(params).unserialize();
		var ret = cnx.__data.ctx.call(path.split("."),params1);
		var s = new haxe.Serializer();
		s.serialize(ret);
		return s.toString() + "#";
	}
	catch( $e7 ) {
		{
			var e = $e7;
			{
				var s = new haxe.Serializer();
				s.serializeException(e);
				return s.toString();
			}
		}
	}
}
haxe.remoting.ExternalConnection.flashConnect = function(name,flashObjectID,ctx) {
	var cnx = new haxe.remoting.ExternalConnection({ ctx : ctx, name : name, flash : flashObjectID},[]);
	haxe.remoting.ExternalConnection.connections.set(name,cnx);
	return cnx;
}
haxe.remoting.ExternalConnection.prototype.__data = null;
haxe.remoting.ExternalConnection.prototype.__path = null;
haxe.remoting.ExternalConnection.prototype.call = function(params) {
	var s = new haxe.Serializer();
	s.serialize(params);
	var params1 = s.toString();
	var data = null;
	var fobj = window.document[this.__data.flash];
	if(fobj == null) fobj = window.document.getElementById[this.__data.flash];
	if(fobj == null) throw "Could not find flash object '" + this.__data.flash + "'";
	try {
		data = fobj.externalRemotingCall(this.__data.name,this.__path.join("."),params1);
	}
	catch( $e8 ) {
		{
			var e = $e8;
			null;
		}
	}
	if(data == null) throw "Call failure : ExternalConnection is not " + "initialized in Flash";
	return new haxe.Unserializer(data).unserialize();
}
haxe.remoting.ExternalConnection.prototype.close = function() {
	haxe.remoting.ExternalConnection.connections.remove(this.__data.name);
}
haxe.remoting.ExternalConnection.prototype.resolve = function(field) {
	var e = new haxe.remoting.ExternalConnection(this.__data,this.__path.copy());
	e.__path.push(field);
	return e;
}
haxe.remoting.ExternalConnection.prototype.__class__ = haxe.remoting.ExternalConnection;
haxe.remoting.ExternalConnection.__interfaces__ = [haxe.remoting.Connection];
org.puremvc.haxe.examples.multiplatformComm.view.ui = {}
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer = function(t) { if( t === $_ ) return; {
	this._type = t;
	if(this._type == "fl9_type") this._conn = haxe.remoting.ExternalConnection.flashConnect("default","haxe_fl9");
	else if(this._type == "fl8_type") this._conn = haxe.remoting.ExternalConnection.flashConnect("default","haxe_fl8");
}}
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.__name__ = ["org","puremvc","haxe","examples","multiplatformComm","view","ui","BoxContainer"];
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.prototype._conn = null;
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.prototype._type = null;
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.prototype.update = function(val) {
	switch(this._type) {
	case "js_type":{
		js.Lib.document.getElementById("box").style.left = Std.string(val) + "px";
	}break;
	case "fl9_type":{
		this._conn.resolve("ExternalView_fl9").resolve("update").call([val]);
	}break;
	case "fl8_type":{
		this._conn.resolve("ExternalView_fl8").resolve("update").call([val]);
	}break;
	}
}
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.prototype.__class__ = org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer;
haxe.io.Bytes = function(length,b) { if( length === $_ ) return; {
	this.length = length;
	this.b = b;
}}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			a.push(0);
		}
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	{
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = s["cca"](i);
			if(c < 127) a.push(c);
			else if(c < 2047) {
				a.push(192 | (c >> 6));
				a.push(128 | (c & 63));
			}
			else if(c <= 65535) {
				a.push(224 | (c >> 12));
				a.push(128 | ((c >> 6) & 63));
				a.push(128 | (c & 63));
			}
			else {
				a.push(240 | (c >> 18));
				a.push(128 | ((c >> 12) & 63));
				a.push(128 | ((c >> 6) & 63));
				a.push(128 | (c & 63));
			}
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = ((this.length < other.length)?this.length:other.length);
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = $closure(String,"fromCharCode");
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 127) s += fcc(c);
		else if(c < 224) s += fcc(((c & 63) << 6) | (b[i++] & 127));
		else if(c < 240) {
			var c2 = b[i++];
			s += fcc((((c & 31) << 12) | ((c2 & 127) << 6)) | (b[i++] & 127));
		}
		else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc(((((c & 15) << 18) | ((c2 & 127) << 12)) | ((c3 << 6) & 127)) | (b[i++] & 127));
		}
	}
	return s;
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v;
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	if(c == null) return null;
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e9 ) {
		{
			var e = $e9;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e10 ) {
		{
			var err = $e10;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	c = c.__super__;
	while(c != null) {
		a = a.concat(Reflect.fields(c.prototype));
		c = c.__super__;
	}
	while(a.remove("__class__")) null;
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(v + 1 == v) return ValueType.TFloat;
		if(Math.ceil(v) == v) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	if(a[0] != b[0]) return false;
	{
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
	}
	var e = a.__enum__;
	if(e != b.__enum__ || e == null) return false;
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
haxe.Unserializer = function(buf) { if( buf === $_ ) return; {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	this.setResolver(haxe.Unserializer.DEFAULT_RESOLVER);
}}
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	{
		var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
		while(_g1 < _g) {
			var i = _g1++;
			codes[haxe.Unserializer.BASE64.cca(i)] = i;
		}
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype.buf = null;
haxe.Unserializer.prototype.cache = null;
haxe.Unserializer.prototype.length = null;
haxe.Unserializer.prototype.pos = null;
haxe.Unserializer.prototype.readDigits = function() {
	var k = 0;
	var s = false;
	var fpos = this.pos;
	while(true) {
		var c = this.buf.charCodeAt(this.pos);
		if(c == null) break;
		if(c == 45) {
			if(this.pos != fpos) break;
			s = true;
			this.pos++;
			continue;
		}
		c -= 48;
		if(c < 0 || c > 9) break;
		k = k * 10 + c;
		this.pos++;
	}
	if(s) k *= -1;
	return k;
}
haxe.Unserializer.prototype.resolver = null;
haxe.Unserializer.prototype.scache = null;
haxe.Unserializer.prototype.setResolver = function(r) {
	if(r == null) this.resolver = { resolveClass : function(_) {
		return null;
	}, resolveEnum : function(_) {
		return null;
	}}
	else this.resolver = r;
}
haxe.Unserializer.prototype.unserialize = function() {
	switch(this.buf.charCodeAt(this.pos++)) {
	case 110:{
		return null;
	}break;
	case 116:{
		return true;
	}break;
	case 102:{
		return false;
	}break;
	case 122:{
		return 0;
	}break;
	case 105:{
		return this.readDigits();
	}break;
	case 100:{
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if((c >= 43 && c < 58) || c == 101 || c == 69) this.pos++;
			else break;
		}
		return Std.parseFloat(this.buf.substr(p1,this.pos - p1));
	}break;
	case 121:{
		var len = this.readDigits();
		if(this.buf.charAt(this.pos++) != ":" || this.length - this.pos < len) throw "Invalid string length";
		var s = this.buf.substr(this.pos,len);
		this.pos += len;
		s = StringTools.urlDecode(s);
		this.scache.push(s);
		return s;
	}break;
	case 107:{
		return Math.NaN;
	}break;
	case 109:{
		return Math.NEGATIVE_INFINITY;
	}break;
	case 112:{
		return Math.POSITIVE_INFINITY;
	}break;
	case 97:{
		var buf = this.buf;
		var a = new Array();
		this.cache.push(a);
		while(true) {
			var c = buf.charCodeAt(this.pos);
			if(c == 104) {
				this.pos++;
				break;
			}
			if(c == 117) {
				this.pos++;
				var n = this.readDigits();
				a[a.length + n - 1] = null;
			}
			else a.push(this.unserialize());
		}
		return a;
	}break;
	case 111:{
		var o = { }
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	}break;
	case 114:{
		var n = this.readDigits();
		if(n < 0 || n >= this.cache.length) throw "Invalid reference";
		return this.cache[n];
	}break;
	case 82:{
		var n = this.readDigits();
		if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
		return this.scache[n];
	}break;
	case 120:{
		throw this.unserialize();
	}break;
	case 99:{
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	}break;
	case 119:{
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		return this.unserializeEnum(edecl,this.unserialize());
	}break;
	case 106:{
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		this.pos++;
		var index = this.readDigits();
		var tag = Type.getEnumConstructs(edecl)[index];
		if(tag == null) throw "Unknown enum index " + name + "@" + index;
		return this.unserializeEnum(edecl,tag);
	}break;
	case 108:{
		var l = new List();
		var buf = this.buf;
		while(buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
		this.pos++;
		return l;
	}break;
	case 98:{
		var h = new Hash();
		var buf = this.buf;
		while(buf.charCodeAt(this.pos) != 104) {
			var s = this.unserialize();
			h.set(s,this.unserialize());
		}
		this.pos++;
		return h;
	}break;
	case 113:{
		var h = new IntHash();
		var buf = this.buf;
		var c = buf.charCodeAt(this.pos++);
		while(c == 58) {
			var i = this.readDigits();
			h.set(i,this.unserialize());
			c = buf.charCodeAt(this.pos++);
		}
		if(c != 104) throw "Invalid IntHash format";
		return h;
	}break;
	case 118:{
		var d = Date.fromString(this.buf.substr(this.pos,19));
		this.pos += 19;
		return d;
	}break;
	case 115:{
		var len = this.readDigits();
		var buf = this.buf;
		if(buf.charAt(this.pos++) != ":" || this.length - this.pos < len) throw "Invalid bytes length";
		var codes = haxe.Unserializer.CODES;
		if(codes == null) {
			codes = haxe.Unserializer.initCodes();
			haxe.Unserializer.CODES = codes;
		}
		var b = new haxe.io.BytesBuffer();
		var i = this.pos;
		var rest = len & 3;
		var max = i + (len - rest);
		while(i < max) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			b.b.push((c1 << 2) | (c2 >> 4));
			var c3 = codes[buf.cca(i++)];
			b.b.push(((c2 << 4) | (c3 >> 2)) & 255);
			var c4 = codes[buf.cca(i++)];
			b.b.push(((c3 << 6) | c4) & 255);
		}
		if(rest >= 2) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			b.b.push((c1 << 2) | (c2 >> 4));
			if(rest == 3) {
				var c3 = codes[buf.cca(i++)];
				b.b.push(((c2 << 4) | (c3 >> 2)) & 255);
			}
		}
		var bytes = b.getBytes();
		this.pos += len;
		this.cache.push(bytes);
		return bytes;
	}break;
	default:{
		null;
	}break;
	}
	this.pos--;
	throw ("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
}
haxe.Unserializer.prototype.unserializeEnum = function(edecl,tag) {
	var constr = Reflect.field(edecl,tag);
	if(constr == null) throw "Unknown enum tag " + Type.getEnumName(edecl) + "." + tag;
	if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
	var nargs = this.readDigits();
	if(nargs == 0) {
		this.cache.push(constr);
		return constr;
	}
	var args = new Array();
	while(nargs > 0) {
		args.push(this.unserialize());
		nargs -= 1;
	}
	var e = constr.apply(edecl,args);
	this.cache.push(e);
	return e;
}
haxe.Unserializer.prototype.unserializeObject = function(o) {
	while(true) {
		if(this.pos >= this.length) throw "Invalid object";
		if(this.buf.charCodeAt(this.pos) == 103) break;
		var k = this.unserialize();
		if(!Std["is"](k,String)) throw "Invalid object key";
		var v = this.unserialize();
		o[k] = v;
	}
	this.pos++;
}
haxe.Unserializer.prototype.__class__ = haxe.Unserializer;
haxe.remoting.Context = function(p) { if( p === $_ ) return; {
	this.objects = new Hash();
}}
haxe.remoting.Context.__name__ = ["haxe","remoting","Context"];
haxe.remoting.Context.share = function(name,obj) {
	var ctx = new haxe.remoting.Context();
	ctx.addObject(name,obj);
	return ctx;
}
haxe.remoting.Context.prototype.addObject = function(name,obj,recursive) {
	this.objects.set(name,{ obj : obj, rec : recursive});
}
haxe.remoting.Context.prototype.call = function(path,params) {
	if(path.length < 2) throw "Invalid path '" + path.join(".") + "'";
	var inf = this.objects.get(path[0]);
	if(inf == null) throw "No such object " + path[0];
	var o = inf.obj;
	var m = Reflect.field(o,path[1]);
	if(path.length > 2) {
		if(!inf.rec) throw "Can't access " + path.join(".");
		{
			var _g1 = 2, _g = path.length;
			while(_g1 < _g) {
				var i = _g1++;
				o = m;
				m = Reflect.field(o,path[i]);
			}
		}
	}
	if(!Reflect.isFunction(m)) throw "No such method " + path.join(".");
	return m.apply(o,params);
}
haxe.remoting.Context.prototype.objects = null;
haxe.remoting.Context.prototype.__class__ = haxe.remoting.Context;
org.puremvc.haxe.core.Model = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.Model.instance = this;
	this.proxyMap = new Hash();
	this.initializeModel();
}}
org.puremvc.haxe.core.Model.__name__ = ["org","puremvc","haxe","core","Model"];
org.puremvc.haxe.core.Model.getInstance = function() {
	if(org.puremvc.haxe.core.Model.instance == null) org.puremvc.haxe.core.Model.instance = new org.puremvc.haxe.core.Model();
	return org.puremvc.haxe.core.Model.instance;
}
org.puremvc.haxe.core.Model.instance = null;
org.puremvc.haxe.core.Model.prototype.hasProxy = function(proxyName) {
	return this.proxyMap.exists(proxyName);
}
org.puremvc.haxe.core.Model.prototype.initializeModel = function() {
	null;
}
org.puremvc.haxe.core.Model.prototype.proxyMap = null;
org.puremvc.haxe.core.Model.prototype.registerProxy = function(proxy) {
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
}
org.puremvc.haxe.core.Model.prototype.removeProxy = function(proxyName) {
	var proxy = this.proxyMap.get(proxyName);
	if(proxy != null) {
		this.proxyMap.remove(proxyName);
		proxy.onRemove();
	}
	return proxy;
}
org.puremvc.haxe.core.Model.prototype.retrieveProxy = function(proxyName) {
	return this.proxyMap.get(proxyName);
}
org.puremvc.haxe.core.Model.prototype.__class__ = org.puremvc.haxe.core.Model;
org.puremvc.haxe.core.Model.__interfaces__ = [org.puremvc.haxe.interfaces.IModel];
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
org.puremvc.haxe.interfaces.IProxy = function() { }
org.puremvc.haxe.interfaces.IProxy.__name__ = ["org","puremvc","haxe","interfaces","IProxy"];
org.puremvc.haxe.interfaces.IProxy.prototype.getData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.getProxyName = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IProxy.prototype.setData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.__class__ = org.puremvc.haxe.interfaces.IProxy;
haxe.Serializer = function(p) { if( p === $_ ) return; {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new Hash();
	this.scount = 0;
}}
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype.buf = null;
haxe.Serializer.prototype.cache = null;
haxe.Serializer.prototype.scount = null;
haxe.Serializer.prototype.serialize = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
	{
		this.buf.b += "n";
	}break;
	case 1:
	{
		if(v == 0) {
			this.buf.b += "z";
			return;
		}
		this.buf.b += "i";
		this.buf.b += v;
	}break;
	case 2:
	{
		if(Math.isNaN(v)) this.buf.b += "k";
		else if(!Math.isFinite(v)) this.buf.b += (v < 0?"m":"p");
		else {
			this.buf.b += "d";
			this.buf.b += v;
		}
	}break;
	case 3:
	{
		this.buf.b += (v?"t":"f");
	}break;
	case 6:
	var c = $e[2];
	{
		if(c == String) {
			this.serializeString(v);
			return;
		}
		if(this.useCache && this.serializeRef(v)) return;
		switch(c) {
		case Array:{
			var ucount = 0;
			this.buf.b += "a";
			var l = v["length"];
			{
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					if(v[i] == null) ucount++;
					else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += "n";
							else {
								this.buf.b += "u";
								this.buf.b += ucount;
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
			}
			if(ucount > 0) {
				if(ucount == 1) this.buf.b += "n";
				else {
					this.buf.b += "u";
					this.buf.b += ucount;
				}
			}
			this.buf.b += "h";
		}break;
		case List:{
			this.buf.b += "l";
			var v1 = v;
			{ var $it11 = v1.iterator();
			while( $it11.hasNext() ) { var i = $it11.next();
			this.serialize(i);
			}}
			this.buf.b += "h";
		}break;
		case Date:{
			var d = v;
			this.buf.b += "v";
			this.buf.b += d.toString();
		}break;
		case Hash:{
			this.buf.b += "b";
			var v1 = v;
			{ var $it12 = v1.keys();
			while( $it12.hasNext() ) { var k = $it12.next();
			{
				this.serializeString(k);
				this.serialize(v1.get(k));
			}
			}}
			this.buf.b += "h";
		}break;
		case IntHash:{
			this.buf.b += "q";
			var v1 = v;
			{ var $it13 = v1.keys();
			while( $it13.hasNext() ) { var k = $it13.next();
			{
				this.buf.b += ":";
				this.buf.b += k;
				this.serialize(v1.get(k));
			}
			}}
			this.buf.b += "h";
		}break;
		case haxe.io.Bytes:{
			var v1 = v;
			var i = 0;
			var max = v1.length - 2;
			var chars = "";
			var b64 = haxe.Serializer.BASE64;
			while(i < max) {
				var b1 = v1.b[i++];
				var b2 = v1.b[i++];
				var b3 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt(((b1 << 4) | (b2 >> 4)) & 63) + b64.charAt(((b2 << 2) | (b3 >> 6)) & 63) + b64.charAt(b3 & 63);
			}
			if(i == max) {
				var b1 = v1.b[i++];
				var b2 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt(((b1 << 4) | (b2 >> 4)) & 63) + b64.charAt((b2 << 2) & 63);
			}
			else if(i == max + 1) {
				var b1 = v1.b[i++];
				chars += b64.charAt(b1 >> 2) + b64.charAt((b1 << 4) & 63);
			}
			this.buf.b += "s";
			this.buf.b += chars.length;
			this.buf.b += ":";
			this.buf.b += chars;
		}break;
		default:{
			this.cache.pop();
			this.buf.b += "c";
			this.serializeString(Type.getClassName(c));
			this.cache.push(v);
			this.serializeFields(v);
		}break;
		}
	}break;
	case 4:
	{
		if(this.useCache && this.serializeRef(v)) return;
		this.buf.b += "o";
		this.serializeFields(v);
	}break;
	case 7:
	var e = $e[2];
	{
		if(this.useCache && this.serializeRef(v)) return;
		this.cache.pop();
		this.buf.b += (this.useEnumIndex?"j":"w");
		this.serializeString(Type.getEnumName(e));
		if(this.useEnumIndex) {
			this.buf.b += ":";
			this.buf.b += v[1];
		}
		else this.serializeString(v[0]);
		this.buf.b += ":";
		var l = v["length"];
		this.buf.b += l - 2;
		{
			var _g = 2;
			while(_g < l) {
				var i = _g++;
				this.serialize(v[i]);
			}
		}
		this.cache.push(v);
	}break;
	case 5:
	{
		throw "Cannot serialize function";
	}break;
	default:{
		throw "Cannot serialize " + Std.string(v);
	}break;
	}
}
haxe.Serializer.prototype.serializeException = function(e) {
	this.buf.b += "x";
	this.serialize(e);
}
haxe.Serializer.prototype.serializeFields = function(v) {
	{
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
	}
	this.buf.b += "g";
}
haxe.Serializer.prototype.serializeRef = function(v) {
	var vt = typeof(v);
	{
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += i;
				return true;
			}
		}
	}
	this.cache.push(v);
	return false;
}
haxe.Serializer.prototype.serializeString = function(s) {
	var x = this.shash.get(s);
	if(x != null) {
		this.buf.b += "R";
		this.buf.b += x;
		return;
	}
	this.shash.set(s,this.scount++);
	this.buf.b += "y";
	s = StringTools.urlEncode(s);
	this.buf.b += s.length;
	this.buf.b += ":";
	this.buf.b += s;
}
haxe.Serializer.prototype.shash = null;
haxe.Serializer.prototype.toString = function() {
	return this.buf.b;
}
haxe.Serializer.prototype.useCache = null;
haxe.Serializer.prototype.useEnumIndex = null;
haxe.Serializer.prototype.__class__ = haxe.Serializer;
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.facade.Facade.apply(this,[]);
}}
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.__name__ = ["org","puremvc","haxe","examples","multiplatformComm","MultiplatformFacade"];
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.__super__ = org.puremvc.haxe.patterns.facade.Facade;
for(var k in org.puremvc.haxe.patterns.facade.Facade.prototype ) org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.prototype[k] = org.puremvc.haxe.patterns.facade.Facade.prototype[k];
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.instance = null;
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.getInstance = function() {
	if(org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.instance == null) org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.instance = new org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade();
	return org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.instance;
}
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.prototype.initializeController = function() {
	org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController.apply(this,[]);
	this.registerCommand("startup",org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand);
}
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.prototype.__class__ = org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b += sep;
		s.b += l[0];
		l = l[1];
	}
	return s.b;
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b += "{";
	while(l != null) {
		if(first) first = false;
		else s.b += ", ";
		s.b += l[0];
		l = l[1];
	}
	s.b += "}";
	return s.b;
}
List.prototype.__class__ = List;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
MultiplatformComm = function(p) { if( p === $_ ) return; {
	var facade = org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.getInstance();
	facade.sendNotification("startup");
}}
MultiplatformComm.__name__ = ["MultiplatformComm"];
MultiplatformComm.main = function() {
	var app = new MultiplatformComm();
}
MultiplatformComm.prototype.__class__ = MultiplatformComm;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e14 ) {
			{
				var e = $e14;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e15 ) {
		{
			var e = $e15;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o) === o && isFinite(o);
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.h = null;
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}}
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it16 = it;
	while( $it16.hasNext() ) { var i = $it16.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	return s.b;
}
IntHash.prototype.__class__ = IntHash;
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator = function(name,viewComponent) { if( name === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[name,viewComponent]);
	this._name = name;
}}
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.__name__ = ["org","puremvc","haxe","examples","multiplatformComm","view","BoxMediator"];
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype._name = null;
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype.getMediatorName = function() {
	return this._name;
}
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype.handleNotification = function(notification) {
	switch(notification.getName()) {
	case "value_set":{
		this.viewComponent.update(notification.getBody());
	}break;
	}
}
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype.listNotificationInterests = function() {
	return ["value_set"];
}
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype.updateView = function(val) {
	this.viewComponent.update(val);
}
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.prototype.__class__ = org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator;
org.puremvc.haxe.patterns.observer.Notification = function(name,body,type) { if( name === $_ ) return; {
	this.name = name;
	if(body != null) this.body = body;
	if(type != null) this.type = type;
}}
org.puremvc.haxe.patterns.observer.Notification.__name__ = ["org","puremvc","haxe","patterns","observer","Notification"];
org.puremvc.haxe.patterns.observer.Notification.prototype.body = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.getBody = function() {
	return this.body;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getName = function() {
	return this.name;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getType = function() {
	return this.type;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.name = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.setBody = function(body) {
	this.body = body;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.setType = function(type) {
	this.type = type;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.toString = function() {
	var msg = "Notification Name: " + this.getName();
	msg += "\nBody:" + (this.body == null?"null":this.body.toString());
	msg += "\nType:" + (this.type == null?"null":this.type);
	return msg;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.type = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notification;
org.puremvc.haxe.patterns.observer.Notification.__interfaces__ = [org.puremvc.haxe.interfaces.INotification];
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Date.now = function() {
		return new Date();
	}
	Date.fromTime = function(t) {
		var d = new Date();
		d["setTime"](t);
		return d;
	}
	Date.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			return d;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	Date.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + ((m < 10?"0" + m:"" + m)) + "-" + ((d < 10?"0" + d:"" + d)) + " " + ((h < 10?"0" + h:"" + h)) + ":" + ((mi < 10?"0" + mi:"" + mi)) + ":" + ((s < 10?"0" + s:"" + s));
	}
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
	Math.__name__ = ["Math"];
}
{
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
org.puremvc.haxe.patterns.mediator.Mediator.NAME = "Mediator";
org.puremvc.haxe.examples.multiplatformComm.view.InputMediator.NAME = "InputMediator";
haxe.remoting.ExternalConnection.connections = new Hash();
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.JS_TYPE = "js_type";
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.FL9_TYPE = "fl9_type";
org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer.FL8_TYPE = "fl8_type";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.STARTUP = "startup";
org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade.VALUE_SET = "value_set";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.FL8_BOX_MEDIATOR = "fl8_box_mediator";
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.FL9_BOX_MEDIATOR = "fl9_box_mediator";
org.puremvc.haxe.examples.multiplatformComm.view.BoxMediator.JS_BOX_MEDIATOR = "js_box_mediator";
$Main.init = MultiplatformComm.main();
