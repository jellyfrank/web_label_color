//  @@@ web_lable_color custom JS @@@
//#############################################################################
//    
//    Copyright (C) 2014 Rainsoft (QingDao)
//    Written by Kevin Kong(kfx2007@163.com)
//    Thanks to  Agile Business Group sagl (<http://www.agilebg.com>)
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU Affero General Public License as published
//    by the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU Affero General Public License for more details.
//
//    You should have received a copy of the GNU Affero General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//#############################################################################

openerp.web_label_color=function(instance){
		var QWeb = instance.web.qweb,
		_t = instance.web._t,
		_lt = instance.web._lt;

		instance.web.form.FieldMany2One.include({
				display_string:function(str){
						this._super(str);
						if(this.options.color){
								this.$label.css('color',this.options.color);
						}
				}
		});
}
