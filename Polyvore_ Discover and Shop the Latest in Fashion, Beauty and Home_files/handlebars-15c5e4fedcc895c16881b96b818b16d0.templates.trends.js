(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['hero-unit-primary'] = template({"1":function(depth0,helpers,partials,data) {
  return "rel=\"nofollow\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"caption\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.logoUrl : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        Promoted\n    </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <img class=\"logo\" src=\""
    + escapeExpression(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logoUrl","hash":{},"data":data}) : helper)))
    + "\">\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <li><img src=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"trend-unit primary "
    + escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.linkoutUrl || (depth0 != null ? depth0.linkoutUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTitle || (depth0 != null ? depth0.linkoutTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTitle","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTarget || (depth0 != null ? depth0.linkoutTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTarget","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "></a>\n    <div class=\"info\">\n        <div class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"call-to-action\">"
    + escapeExpression(((helper = (helper = helpers.callToAction || (depth0 != null ? depth0.callToAction : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"callToAction","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    <ul class=\"trend-visuals\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.imageUrls : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n</div>\n";
},"useData":true});
templates['hero-unit-secondary'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"trend-unit secondary\">\n    <div class=\"list\">\n        <div class=\"header\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n        <ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.trends : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\n    </div>\n    <div class=\"trend-visuals\">\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" />\n    </div>\n</div>\n";
},"useData":true});
templates['hero-unit-splash'] = template({"1":function(depth0,helpers,partials,data) {
  return "rel=\"nofollow\"";
  },"3":function(depth0,helpers,partials,data) {
  return "promoted";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <div class=\"caption\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.logoUrl : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  Promoted\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n                   <img class=\"logo\" src=\""
    + escapeExpression(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logoUrl","hash":{},"data":data}) : helper)))
    + "\">\n    ";
},"8":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <li><img src=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"trend-unit primary fade-in\">\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.linkoutUrl || (depth0 != null ? depth0.linkoutUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTitle || (depth0 != null ? depth0.linkoutTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTitle","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTarget || (depth0 != null ? depth0.linkoutTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTarget","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "></a>\n    <div class=\"info ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"btn_pill btn_pill_outline\">"
    + escapeExpression(((helper = (helper = helpers.callToAction || (depth0 != null ? depth0.callToAction : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"callToAction","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <ul class=\"trend-visuals\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.imageUrls : depth0), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n</div>\n";
},"useData":true});
templates['hero-unit-splash-wrapper'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div trackcontext=\"trends\">\n    ";
  stack1 = ((helper = (helper = helpers.dfp_placeholder || (depth0 != null ? depth0.dfp_placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dfp_placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    <div class=\"trend-hero-unit splash "
    + escapeExpression(((helper = (helper = helpers.variant || (depth0 != null ? depth0.variant : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"variant","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"trend-container primary\" id=\"trend_hero\"></div>\n    </div>\n</div>\n";
},"useData":true});
templates['sidekick-unit'] = template({"1":function(depth0,helpers,partials,data) {
  return "rel=\"nofollow\"";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"call-to-action\">"
    + escapeExpression(((helper = (helper = helpers.callToAction || (depth0 != null ? depth0.callToAction : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"callToAction","hash":{},"data":data}) : helper)))
    + "</div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"trend-unit "
    + escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"trend-container\">\n        <a href=\""
    + escapeExpression(((helper = (helper = helpers.linkoutUrl || (depth0 != null ? depth0.linkoutUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTitle || (depth0 != null ? depth0.linkoutTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTitle","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + escapeExpression(((helper = (helper = helpers.linkoutTarget || (depth0 != null ? depth0.linkoutTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkoutTarget","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.promoted : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "></a>\n        <div class=\"trend-details\">\n            <div class=\"caption\">"
    + escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.callToAction : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n\n        <div class=\"trend-visuals\">\n            <img src=\""
    + escapeExpression(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n</div>\n";
},"useData":true});
})();