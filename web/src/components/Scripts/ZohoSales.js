const ZohoSales = () => {
  return (
    <>
      <script>{`
        var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"77464144f0307e5d43de560d9806d2fdd98dbf1a8dba0fb4a61a9630fe7d7d5c1e92507c13fa0fac71e5ac4fb3822ca1", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
        `}
      </script>
    </>
  )
}

export default ZohoSales;