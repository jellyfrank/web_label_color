# coding:utf-8

{
        "name":"web label color",
        "author":"Rainsoft",
        "version":"1.0",
        "description":"""
Web Label Color
================================================
someone wants to change the color of label in form view which is not available in current openerp version.So that's
this modlue 's purpose,to help you to change your label color for many2one type field.if you want to add this feature to another type field ,you can write your own version.

How To Use:
-----------------------------------------------
before install:
edit addons/base/rng/view.rng file,add "<rng:optional><rng:attribute name="color"/></rng:optional>" to the file at line 545(v 7.0),
then add color attribute to your many2one feild,specify the color of label. eg:
 <feild name="test" color="red"/>
        """,
        "dpends":['web'],
        "js":['static/js/demo.js'],
        "installable":True,
        "autoinstall":False,
        "category":"Others",
        
}
