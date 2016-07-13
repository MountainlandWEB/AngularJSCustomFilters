(function() {
    "use strict";

    angular
        .module('app.case')
        .constant('Case', {
            PASCAL_CASE:            /([A-Z])/g,
            CAMEL_CASE:             /([A-Z])/g,
            DOT_CASE:               /(\.\w)/g,
            HYPHEN_CASE:            /(\-\w)/g,
            SNAKE_CASE:             /(_\w)/g,
            SCREAMING_SNAKE_CASE:   /(_\w)/g,
            WORDS_CASE:             /( \w)/g,
            UNKNOWN:                "UNKNOWN"
        })
        .service('CaseConverterService', CaseConverterService);

    function CaseConverterService(Case) {
        var service = {
            toPascal: toPascal,
            toCamel: toCamel,
            toDot: toDot,
            toHyphen: toHyphen,
            toSnake: toSnake,
            toScreamingSnake: toScreamingSnake,
            toWords: toWords
        };
        return service;

        function pascalConverter(match) {
            return match[match.length-1].toUpperCase();
        }

        function dotConverter(match) {
            return '.' + match[match.length-1].toLowerCase();
        };

        function hyphenConverter(match) {
            return '-' + match[match.length-1].toLowerCase();
        };

        function snakeConverter(match) {
            return '_' + match[match.length-1].toLowerCase();
        };

        function wordsConverter(match) {
            return ' ' + match[match.length-1].toLowerCase();
        };

        function getCaseType(string) {
            if (string.indexOf("-") > -1) {
                var words = string.split("-");
                if (checkAlphaLower(words.join(""))) {
                    return Case.HYPHEN_CASE;
                }
            } else if (string.indexOf("_") > -1) {
                var words = string.split("_");
                if (checkAlphaLower(words.join(""))) {
                    return Case.SNAKE_CASE;
                } else if (checkAlphaUpper(words.join(""))) {
                    return Case.SCREAMING_SNAKE_CASE;
                }
            } else if (string.indexOf(".") > -1) {
                return Case.DOT_CASE;
            } else if (string.indexOf(" ") > -1) {
                return Case.WORDS_CASE;
            } else if (checkAlphaLower(string[0]) && checkAlpha(string)) {
                return Case.CAMEL_CASE;
            } else if (checkAlphaUpper(string[0]) && checkAlpha(string)) {
                return Case.PASCAL_CASE;
            }
            return Case.UNKNOWN;
        }

        function convert(string, toCase) {
            console.log(toCase)
            var fromCase = getCaseType(string);
            if (fromCase == Case.UNKNOWN) {
                return string;
            }
            if (fromCase === Case.SCREAMING_SNAKE_CASE && toCase === pascalConverter) {
                var strings = string.split("_");
                var result = "";
                for (var i=0; i<strings.length; i++) {
                    result += strings[i].charAt(0).toUpperCase() + strings[i].slice(1).toLowerCase();
                }
                return result;

            }
            return string.replace(fromCase, toCase);
        }

        function toPascal(string) {
            var result = convert(string, pascalConverter);
            if (result === string) return string;
            return result.charAt(0).toUpperCase() + result.slice(1);
        }
        
        function toCamel(string) {
            var result = convert(string, pascalConverter);
            if (result === string) return string;
            return result.charAt(0).toLowerCase() + result.slice(1);
        }
        
        function toDot(string) {
            var result = convert(string, dotConverter);
            if (result === string) return string;
            if (result.charAt(0) == '.') result = result.slice(1);
            return result.toLowerCase();
        }
        
        function toHyphen(string) {
            var result = convert(string, hyphenConverter);
            if (result === string) return string;
            if (result.charAt(0) == '-') result = result.slice(1);
            return result.toLowerCase();
        }
        
        function toSnake(string) {
            var result = convert(string, snakeConverter);
            if (result === string) return string;
            if (result.charAt(0) == '_') result = result.slice(1);
            return result.toLowerCase();
        }
        
        function toScreamingSnake(string) {
            var result = convert(string, snakeConverter);
            if (result === string) return string.toUpperCase();
            if (result.charAt(0) == '_') result = result.slice(1);
            return result.toUpperCase();
        }
        
        function toWords(string) {
            var result = convert(string, wordsConverter);
            if (result === string) return string;
            return result.toLowerCase();
        }

        function checkAlphaLower(string) {
            var i =0;
            while (i < string.length){
                var character = string.charAt(i);
                if (!isAlpha(character) || isUpperCase(character)){
                    return false;
                }
                i++;
            }
            return true;
        }

        function checkAlphaUpper(string) {
            var i =0;
            while (i < string.length){
                var character = string.charAt(i);
                if (!isAlpha(character) || isLowerCase(character)){
                    return false;
                }
                i++;
            }
            return true;
        }

        function checkAlpha(string) {
            var i =0;
            while (i < string.length){
                var character = string.charAt(i);
                if (!isAlpha(character)){
                    return false;
                }
                i++;
            }
            return true;
        }

        function isAlpha(char) {
            return /[a-zA-Z]/.test(char);
        }

        function isLowerCase(char) {
            return char === char.toLowerCase() && char !== char.toUpperCase();
        }

        function isUpperCase(char) {
            return char === char.toUpperCase() && char !== char.toLowerCase();
        }
    }

})();