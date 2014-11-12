<script language="javascript">

    function  getimgsrc(htmlstr){

        var reg=/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;

        var arr = [];

        while(tem=reg.exec(htmlstr)){

            arr.push(tem[2]);

        }

        return arr;

    }

    var htmlStr=" <P align=center> <FONT size=3> <IMG src='/include/eWebEditor/UploadFile/200941092128708.jpg' width=636 border=0>ddd <IMG style='WIDTH: 294px; HEIGHT: 245px' src=/include/eWebEditor/UploadFile/20094109234712.jpg' width=441 height=341 border=0> </P>";

    var imgs=getimgsrc(htmlStr);

    document.write(imgs);

</script>