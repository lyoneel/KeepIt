jQuery(function($) {

    'use strict';

    var _LyCustom = window._LyCustom || {};

    _LyCustom.externalUrl = function() {
        $.expr[':'].external = function(obj) {
            return !obj.href.match(/^mailto\:/) &&
                (obj.hostname != location.hostname);
        };
        $('a:external').addClass('external');
        $(".external").attr('target', '_blank');

    }

    _LyCustom.changeTitle = function() {
        var currentTitle = document.title;
        window.onblur = function() {
            document.title = currentTitle;
        }
        window.onfocus = function() {
            document.title = currentTitle;
        }
    };

    _LyCustom.toggleTheme = function() {
        const currentTheme = window.localStorage && window.localStorage.getItem('theme')
        const isDark = currentTheme === 'dark'
        $('body').toggleClass('dark-theme', isDark)
        $('.theme-switch').on('click', () => {
            $('body').toggleClass('dark-theme')
            window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
        })
    }

    _LyCustom.toggleMobileMenu = function() {
        $('.menu-toggle').on('click', () => {
            $('.menu-toggle').toggleClass('active')
            $('#mobile-menu').toggleClass('active')
        })
    }

    /*
    function createCopyButton(highlightDiv) {
        const button = document.createElement("button");
        button.className = "copy-code-button";
        button.type = "button";
        button.innerText = "Copy";
        button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));
        addCopyButtonToDom(button, highlightDiv);
    }

    async function copyCodeToClipboard(button, highlightDiv) {
        const codeToCopy = highlightDiv.querySelector(":last-child > .chroma > code").innerText;
        try {
            let result = await navigator.permissions.query({ name: "clipboard-write" });
            if (result.state == "granted" || result.state == "prompt") {
                await navigator.clipboard.writeText(codeToCopy);
            } else {
                copyCodeBlockExecCommand(codeToCopy, highlightDiv);
            }
        } catch (_) {
            copyCodeBlockExecCommand(codeToCopy, highlightDiv);
        }
        finally {
            codeWasCopied(button);
        }
    }

    function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
        const textArea = document.createElement("textArea");
        textArea.contentEditable = 'true'
        textArea.readOnly = 'false'
        textArea.className = "copyable-text-area";
        textArea.value = codeToCopy;
        highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
        const range = document.createRange()
        range.selectNodeContents(textArea)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
        textArea.setSelectionRange(0, 999999)
        document.execCommand("copy");
        highlightDiv.removeChild(textArea);
    }

    function codeWasCopied(button) {
        button.blur();
        button.innerText = "Copied!";
        setTimeout(function() {
            button.innerText = "Copy";
        }, 2000);
    }

    function addCopyButtonToDom(button, highlightDiv) {
        highlightDiv.insertBefore(button, highlightDiv.firstChild);
        const wrapper = document.createElement("div");
        wrapper.className = "highlight-wrapper";
        highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
        wrapper.appendChild(highlightDiv);
    }

    function copyButton(){
        document.querySelectorAll(".highlight")
            .forEach(highlightDiv => createCopyButton(highlightDiv));
    }

     */





    $(document).ready(function() {
        _LyCustom.changeTitle()
        //_LyCustom.toggleTheme()
        _LyCustom.toggleMobileMenu()
        //copyButton()
    });
});
