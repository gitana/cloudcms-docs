/*
Copyright 2012 Gitana Software, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 

You may obtain a copy of the License at 
	http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License. 

For more information, please contact Gitana Software, Inc. at this
address:

  info@gitanasoftware.com
*/


/**
 * UMD wrapper for compatibility with browser, Node and AMD.
 *
 * Based on:
 *   https://github.com/umdjs/umd/blob/master/returnExports.js
 */
(function (root, factory)
{
    if (typeof exports === 'object')
    {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    }
    else if (typeof define === 'function' && define.amd)
    {
        // AMD. Register as an anonymous module.
        define( ['jquery', 'ratchet/ratchet'], factory);
    }
    else
    {
        // Browser globals
        root["Ratchet.Configuration"] = factory();
    }

}(this, function () {

    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    //return {};

    /*!
Ratchet Version 1.0.2

Copyright 2012 Gitana Software, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 

You may obtain a copy of the License at 
	http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License. 

For more information, please contact Gitana Software, Inc. at this
address:

  info@gitanasoftware.com
*/

/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	var proto = new this;
	extend.call(proto, _instance);
  proto.base = function() {
    // call this method from any other method to invoke that method's ancestor
  };
	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] != null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
(function($) {

    /**
     * CONFIGURATION SERVICE
     *
     * The configuration service provides a singleton service that manages configurations for a Ratchet application.
     * Configuration consists of zero or more configuration blocks that are evaluated at runtime based on the
     * context at the given time.  Upon retrieval, each configuration block is evaluated against the current context
     * and a dynamic configuration is assembled.
     *
     * The configuration service returns evaluated JSON which might look something like the following:
     *
     *  {
     *      "keyA": {
     *          "key1": "value1",
     *          "key2": ["value2"],
     *          "key3": {
     *              "key4": "value4"
     *          }
     *      },
     *      "keyB": {
     *          "key5": {
     *              "key6": [{
     *                  "key7": "value7"
     *              },{
     *                  "key8": "value8"
     *              }]
     *          }
     *      }
     *  }
     *
     *  And so forth.  In other words, the configuration is any arbitrary JSON structure.
     *
     *  Each module that loads can retrieve the configuration either using the singleton accessor
     *  (i.e. Ratchet.Configuration) or using the AMD/CommonJS approach.  The following works:
     *
     *      var config = Ratchet.Configuration;
     *      var config = require("ratchet/config");
     *
     *  Each module can then add its own configuration like this:
     *
     *      config.add({
     *          ... my config ...
     *      });
     *
     *  When used in the browser, the SCRIPT tag may contain a reference to a config file to load, i.e:
     *
     *      <script type="text/javascript" src="ratchet/config.js" data-config="config.json"></script>
     *
     *  When this tag evaluates, the file config.json will be loaded and the config will be applied to the singleton
     *  configuration registry.
     *
     *  You can retrieve the configuration at runtime by doing the following:
     *
     *      var json = config.eval(context);
     *
     *
     *
     *  CONFIGURATION BLOCKS
     *
     *  Each module can apply configuration blocks at any time.  A configuration block looks like this:
     *
     *      {
     *          "evaluator": "<configEvaluatorId>",         (optional)
     *          "condition": "<condition>",                 (optional)
     *          "replace":   <boolean>,                     (optional - default: false)
     *          "config": {
     *              ... the config ...
     *          }
     *      }
     *
     *  The fields are defined as thus:
     *
     *      evaluator       (optional) the id of the configuration evaluator to use to determine whether this block of
     *                      config should be included for the current context.  If not provided, then it assumes that
     *                      the block of config should be included.
     *
     *      condition       (optional) values that should be passed to the evaluator in addition to the context to help
     *                      determine whether the config block is valid for inclusion.
     *
     *      replace         (optional) whether the resulting config block should entirely override on any collisions.
     *                      By default, any collisions are merged (append or overwrite on a per record basis).
     *
     *      config          The JSON that you wish to append or replace into the configuration for this context.  This
     *                      can be any JSON structure that you wish.
     *
     *
     *
     *  CONFIGURATION EVALUATORS
     *
     *      TODO
     */

    var configClass = Base.extend({

        constructor: function()
        {
            this.base();

            // keys are generated at runtime
            this.blocks = {};
            this.evaluatorInstances = {};
            this.evaluatorTypes = {};

            this.subscriptions = {};

            this.generateBindingKey = function()
            {
                return Ratchet.toLinearForm.apply(this,arguments);
            };

            /**
             * Internal method for merging JSON.  Elements from the source are merged into the target.
             * The target is modified as the method runs.
             *
             * {
             *   "a": "a1",
             *   "b": "b1"
             * }
             *
             * {
             *   "a": "a2",
             *   "c": "c2"
             * }
             *
             * @param source
             * @param target
             * @param replaceFirstLevel
             */
            this.merge = function(source, target, replaceFirstLevel)
            {
                var isUndefined = function(thing)
                {
                    return (typeof(thing) === "undefined");
                };

                var isArray = function(thing)
                {
                    if (!thing) {
                        return false;
                    }

                    return (typeof(thing) === "object") && (typeof(thing.length) !== "undefined");
                };

                var isObject = function(thing)
                {
                    if (!thing) {
                        return false;
                    }

                    return (typeof(thing) === "object") && (typeof(thing.length) === "undefined");
                };

                var copyOf = function(thing)
                {
                    var copy = thing;

                    if (isArray(thing) || isObject(thing))
                    {
                        copy = JSON.parse(JSON.stringify(thing));
                    }

                    return copy;
                };

                var merge = function(source, target, level, replaceFirstLevel)
                {
                    if (isArray(source))
                    {
                        if (isArray(target))
                        {
                            if (replaceFirstLevel && level == 1)
                            {
                                // remove everything from target array
                                target.splice(0, target.length);
                                //target.length = 0;
                            }

                            // merge array elements
                            $.each(source, function(index) {

                                var added = false;

                                // if the thing we're copying into the array is an object and has a "key" field
                                // then perform a merge
                                // otherwise, simply push into the array

                                if (Ratchet.isObject(source[index]))
                                {
                                    if (!Ratchet.isUndefined(source[index].key))
                                    {
                                        // the source has a "key" field

                                        // now walk the target array elements and find a "key"
                                        // if the keys match, then merge
                                        for (var x = 0; x < target.length; x++)
                                        {
                                            if (Ratchet.isObject(target[x]))
                                            {
                                                if (target[x].key == source[index].key)
                                                {
                                                    target[x] = merge(source[index], target[x]);
                                                    added = true;
                                                }
                                            }
                                        }
                                    }
                                }

                                if (!added)
                                {
                                    target.push(copyOf(source[index]));
                                }

                            });
                        }
                        else
                        {
                            // something is already in the target that isn't an ARRAY
                            // should we overwrite?
                            // TODO
                            Ratchet.logWarn("Source is array but target is: " + typeof(target) + ", cannot merge");
                        }

                    }
                    else if (isObject(source))
                    {
                        if (isObject(target))
                        {
                            if (replaceFirstLevel && level == 1)
                            {
                                // remove everything from target
                                $.each(target, function(key) {
                                    delete target[key];
                                });
                            }

                            // merge object properties
                            $.each(source, function(key) {

                                if (isUndefined(target[key])) {
                                    target[key] = copyOf(source[key]);
                                } else {
                                    target[key] = merge(source[key], target[key], level+1, replaceFirstLevel);
                                }

                            });
                        }
                        else
                        {
                            // something is already in the target that isn't an OBJECT
                            // should we overwrite?
                            // TODO
                            Ratchet.logWarn("Source is object but target is: " + typeof(target) + ", cannot merge");
                        }

                    }
                    else
                    {
                        // otherwise, it's a scalar, always overwrite
                        target = copyOf(source);
                    }

                    return target;
                };

                merge(source, target, 0, replaceFirstLevel)
            };
        },

        /**
         * Registers an evaluator with the configuration service.
         *
         * @param evaluatorId
         * @param evaluatorClass
         */
        register: function(evaluatorId, evaluatorClass)
        {
            this.evaluatorTypes[evaluatorId] = evaluatorClass;
            this.evaluatorInstances[evaluatorId] = new evaluatorClass(evaluatorId);

            return this.evaluatorTypes[evaluatorId];
        },

        /**
         * Applies the specific block of configuration into the configuration service.
         *
         * @param block
         * @return blockKey
         */
        add: function(block)
        {
            // SAFETY CHECK
            // if the block has an evaluator, make sure it is one that we know about
            if (block.evaluator && !this.evaluatorTypes[block.evaluator])
            {
                Ratchet.logError("Block added with evaluator type: " + block.evaluator + ", but this evaluator does not exist");
                throw new Error("Unknown configuration block evaluator: " + block.evaluator);
            }

            // generate a key for this block and register
            var count = Ratchet.uniqueCount();
            if (block.end) {
                count = count + 50000;
            }
            var blockKey = "b-" + Ratchet.padLeft(count, 5);
            this.blocks[blockKey] = block;

            // fire any listeners
            var listenerConfig = {};
            if (block.evaluator) {
                listenerConfig.evaluator = block.evaluator;
            }
            if (block.condition) {
                listenerConfig.condition = block.condition;
            }
            this.triggerListeners(listenerConfig);

            return blockKey;
        },

        /**
         * Removes a block of configuration by its block key.
         *
         * @param blockKey
         */
        release: function(blockKey)
        {
            var block = this.blocks[blockKey];
            if (block)
            {
                delete this.blocks[blockKey];

                // fire any listeners
                var listenerConfig = {};
                if (block.evaluator) {
                    listenerConfig.evaluator = block.evaluator;
                }
                if (block.condition) {
                    listenerConfig.condition = block.condition;
                }
                this.triggerListeners(listenerConfig);
            }
        },

        /**
         * Evaluates the current set of configuration blocks for the given context and hands back the
         * resulting JSON.
         *
         * @param context
         */
        evaluate: function(context)
        {
            var self = this;

            // figure out which blocks to apply
            var orderedBlockKeys = [];
            var keepers = {};
            for (var blockKey in this.blocks)
            {
                var block = this.blocks[blockKey];

                // condition is optional
                var condition = block.condition;

                if (!block.evaluator)
                {
                    // nothing to evaluate, so keep
                    keepers[blockKey] = block;
                    orderedBlockKeys.push(blockKey);
                }
                else
                {
                    // fetch the evaluator
                    var evaluatorInstance = this.evaluatorInstances[block.evaluator];
                    if (!evaluatorInstance)
                    {
                        Ratchet.logWarn("Missing configuration evaluator: " + block.evaluator);
                    }
                    else
                    {
                        // evaluate
                        var valid = evaluatorInstance.evaluate(context, condition);
                        if (valid)
                        {
                            // valid, so keep it
                            keepers[blockKey] = block;
                            orderedBlockKeys.push(blockKey);
                        }
                    }
                }
            }

            // sort the ordered block keys
            orderedBlockKeys.sort();

            // debugging
            Ratchet.logDebug("Configuration evaluate() for context: " + (context ? JSON.stringify(context) : "null"));
            for (var blockKey in keepers)
            {
                Ratchet.logDebug(" - keeper[" + blockKey + "]: " + JSON.stringify(keepers[blockKey]));
            }

            // now apply
            Ratchet.logDebug("Applying Configuration");
            var result = {};
            for (var i = 0; i < orderedBlockKeys.length; i++)
            {
                var blockKey = orderedBlockKeys[i];

                var block = keepers[blockKey];

                // config is assumed empty if not available
                var config = block.config;
                if (!config) {
                    config = {};
                }

                // whether to replace
                var replace = false;
                if (block.replace) {
                    replace = true;
                }

                Ratchet.logDebug("Applying block: " + blockKey + ": " + JSON.stringify(config));

                self.merge(config, result, replace);
            }
            Ratchet.logDebug("Applied Configuration: " + JSON.stringify(result));

            return result;
        },

        /**
         * Adds a listener to listen to changes in the configuration.
         *
         * @param config
         * @param listenerFunction
         */
        addListener: function(config, listenerFunction)
        {
            var evaluator = config.evaluator;
            var condition = config.condition;

            var bindingKey = this.generateBindingKey(evaluator, condition);

            var subs = this.subscriptions[bindingKey];
            if (!subs)
            {
                subs = {};
                this.subscriptions[bindingKey] = subs;
            }

            var listenerId = listenerFunction._lfid;
            if (listenerId && subs[listenerId])
            {
                // the listener is already bound for the subscription
            }
            else
            {
                if (!listenerId)
                {
                    listenerId = Ratchet.generateListenerId();
                    listenerFunction._lfid = listenerId;
                }

                subs[listenerId] = listenerFunction;
            }
        },

        /**
         * Removes a listener.
         *
         * @param config
         * @param listenerFunctionOrId
         */
        removeListener: function(config, listenerFunctionOrId)
        {
            var evaluator = config.evaluator;
            var condition = config.condition;


            var bindingKey = this.generateBindingKey(evaluator, condition);

            var listenerId = listenerFunctionOrId;
            if (Ratchet.isFunction(listenerFunctionOrId))
            {
                listenerId = listenerFunctionOrId._lfid;
            }
            if (!listenerId)
            {
                // nothing to do, this listener is not bound
            }
            else
            {
                var subs = this.subscriptions[bindingKey];
                if (subs && subs[listenerId])
                {
                    delete subs[listenerId];
                }

                if (Ratchet.isEmptyObject(subs))
                {
                    delete this.subscriptions[bindingKey];
                }
            }
        },

        /**
         * Removes all listeners.
         *
         * @param config
         */
        removeAllListeners: function(config)
        {
            var evaluator = config.evaluator;
            var condition = config.condition;

            var bindingKey = this.generateBindingKey(evaluator, condition);

            var subs = this.subscriptions[bindingKey];
            if (subs)
            {
                for (var listenerId in subs)
                {
                    delete subs[listenerId];
                }
            }

            if (Ratchet.isEmptyObject(subs))
            {
                delete this.subscriptions[bindingKey];
            }
        },

        /**
         * Triggers listeners.
         *
         * @param config
         */
        triggerListeners: function(config)
        {
            var evaluator = config.evaluator;
            var condition = config.condition;

            var bindingKey = this.generateBindingKey(evaluator, condition);

            var subs = this.subscriptions[bindingKey];
            if (subs)
            {
                for (var listenerId in subs)
                {
                    var listenerFunction = subs[listenerId];

                    // invoke listener
                    listenerFunction();
                }
            }
        },

        /**
         * Creates a clone of the configuration service.  This is useful for manipulating configuration that
         * will not end up part of the global registry.
         */
        clone: function()
        {
            var x = new configClass();

            for (var blockKey in this.blocks) {
                x[blockKey] = JSON.parse(JSON.stringify(this.blocks[blockKey]));
            }

            for (var instanceId in this.evaluatorInstances) {
                x.evaluatorInstances[instanceId] = this.evaluatorInstances[instanceId];
            }

            for (var typeId in this.evaluatorTypes) {
                x.evaluatorTypes[typeId] = this.evaluatorTypes[typeId];
            }

            for (var subscriptionId in this.subscriptions) {
                x.subscriptions[subscriptionId] = this.subscriptions[subscriptionId];
            }

            return x;
        }

    });

    Ratchet.Configuration = new configClass();

    // if we're running in a browser, we support specifying a config file via the "data-config" attribute on the
    // SCRIPT tag...
    var isBrowser = !!(typeof window !== 'undefined' && navigator && document);
    if (isBrowser)
    {
        var scripts = function()
        {
            var scripts = null;

            if (document)
            {
                scripts = document.getElementsByTagName('script');
            }

            return scripts;
        };

        var eachReverse = function(ary, func)
        {
            if (ary) {
                var i;
                for (i = ary.length - 1; i > -1; i -= 1) {
                    if (ary[i] && func(ary[i], i, ary)) {
                        break;
                    }
                }
            }
        };

        // we're in a browser, so we support specifying "data-config" attributes on the script tag
        eachReverse(scripts(), function (script) {

            // look for a data-config attribute
            var dataConfig = script.getAttribute("data-config");
            if (dataConfig)
            {
                console.log("Found data-config attribute on script tag, loading config");

                // found it, load config
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: dataConfig,
                    success: function(config) {
                        Ratchet.Configuration.apply(config);
                    },
                    error: function(err) {
                        alert(err.responseText);
                    }
                });
            }

        });
    }

    return Ratchet.Configuration;

})(jQuery);(function() {

    Ratchet.AbstractConfigurationEvaluator = Base.extend({

        constructor: function(evaluatorId)
        {
            this.base();

            this.id = evaluatorId;
        },

        /**
         * EXTENSION POINT
         *
         * @param context
         * @param condition (optional)
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            return true;
        },

        /**
         * Determines whether the text "patternString" exists inside of the text "text'.
         *
         * @param text
         * @param patternString
         * @return {*}
         */
        hasMatch: function(text, patternString)
        {
            if (!text) {
                return false;
            }

            if (!patternString) {
                return false;
            }

            // convert t from wildcard format to regexp
            var regex = Ratchet.wildcardToRegExp(patternString);

            var arr = text.match(regex);
            return (arr && arr.length > 0);
        }

    });


})();(function() {

    return Ratchet.Configuration.register("type", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "type" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var type = context.type;

            // if type is a function, then evaluate it
            if (typeof(context.type) === "function") {
                type = context.type();
            }

            return this.hasMatch(condition, type);
        }

    }));

})();(function() {

    return Ratchet.Configuration.register("action-group", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "type" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var actionGroup = context["action-group"];

            // if actionGroup is a function, then evaluate it
            if (typeof(actionGroup) === "function") {
                actionGroup = actionGroup();
            }

            return this.hasMatch(condition, actionGroup);
        }


    }));

})();(function() {

    return Ratchet.Configuration.register("locale", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "locale" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var locale = context.locale;

            // if locale is a function, then evaluate it
            if (typeof(context.locale) === "function") {
                locale = context.locale();
            }

            return this.hasMatch(condition, locale);
        }

    }));

})();(function() {

    return Ratchet.Configuration.register("gadget", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "gadget" id and type of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var gadgetType = context.gadgetType;
            if (!gadgetType) {
                gadgetType = context.gadgetTypeId;
            }
            var gadgetId = context.gadgetId;
            if (!gadgetId) {
                gadgetId = context.gadget;
            }

            var m1 = this.hasMatch(condition.gadgetType, gadgetType);
            var m2 = this.hasMatch(condition.gadget, gadgetId);

            // if only one of the conditions is specified, then filter only on that
            var b = true;
            if (gadgetType) {
                b = b & m1;
            }
            if (gadgetId) {
                b = b & m2;
            }

            // however, if neither are specified, then false
            if (!gadgetType && !gadgetId) {
                b = false;
            }

            return b;
        }

    }));

})();(function() {

    return Ratchet.Configuration.register("application", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "application" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var application = context.application;
            if (!application) {
                return false;
            }

            // if application is a function, then evaluate it
            if (typeof(context.application) === "function") {
                application = context.application();
            }

            return this.hasMatch(condition, application);
        }

    }));

})();(function() {

    return Ratchet.Configuration.register("page", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "page" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var page = context.page;

            // if page is a function, then evaluate it
            if (typeof(context.page) === "function") {
                page = context.page();
            }

            return this.hasMatch(condition, page);
        }

    }));

})();(function() {

    return Ratchet.Configuration.register("viewer", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Checks whether the "viewer" property of the context matches the condition.
         *
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(context, condition)
        {
            if (!context) {
                return false;
            }

            var viewer = context.viewer;
            if (!viewer) {
                return false;
            }

            // if viewer is a function, then evaluate it
            if (typeof(context.viewer) === "function") {
                viewer = context.viewer();
            }

            return this.hasMatch(condition, viewer);
        }

    }));

})();

    return Ratchet.Configuration;

}));
