(function() {
    /**
     * Factory method
     * @returns {Translate}
     */
    var Factory = function() {

        var Translate = function(messages) {
            this.messages = messages || {};
        }

        Translate.prototype = {

            /**
             * List of messages
             */
            messages: {},

            /**
             * Reset message list
             */
            reset: function() {
                this.messages = {};
                return this;
            },

            /**
             * Add new message
             * @param {string} key
             * @param {string} value
             */
            setMessage: function(key, value) {
                this.messages[key] = value;
                return this;
            },

            /**
             * Append list of messages
             * @param messages
             */
            addMessages: function(messages) {
                for(var key in messages) {
                    this.messages[key] = messages[key];
                }
                return this;
            },

            /**
             * Get message by key
             *
             * @param {string} key
             * @param {string} placeholders
             * @returns {string}
             */
            getMessage: function(key, placeholders) {
                // get message
                var message = this.messages[key] || key;

                // replace placeholders
                if (placeholders) {
                    for(var placeholder in placeholders) {
                        message = message.replace(
                            new RegExp('{' + placeholder + '}', 'g'),
                            placeholders[placeholder]
                        );
                    };
                }

                return message;
            }
        };

        return Translate;
    };

    /**
     * Module loading
     */
    (function(context, factory) {
        if (typeof define === 'function' && define.amd) {
            define('Translate', function () {
                return (context['Translate'] = factory());
            });
        } else if (typeof exports === 'object') {
            module.exports = factory();
        } else {
            context['Translate'] = factory();
        }
    })(this, Factory);
})();
