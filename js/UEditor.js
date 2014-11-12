UE.getEditor('editor').addListener("ready", function () {
            // editor准备好之后才可以使用
//            ueditor.setContent('abc');
            UE.getEditor('editor').setContent(oldContext);
//            UE.getEditor('editor').execCommand('insertHtml', oldContext);
        });