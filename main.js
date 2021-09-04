var para = document.getElementById("pe")

var inputs = document.querySelectorAll("input")
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function(e){
        var pname = e.target.name
        var pvalue = e.target.value
        switch (pname) {
            case "fontFamily" :
                para.style.fontFamily = pvalue
                break;
            case "textAlign" :
                para.style.textAlign = pvalue
                break;
            case "lineHeight" :
                para.style.lineHeight = pvalue
                break;
            case "letterSpacing" :
                para.style.letterSpacing = pvalue
                break;
            case "textIndent" :
                para.style.textIndent = pvalue
                break;
            case "textTransform" :
                para.style.textTransform = pvalue
                break;
            case "textDecoration" :
                para.style.textDecoration = pvalue
                break;
            case "borderStyle" :
                para.style.borderStyle = pvalue
                break;
            case "borderColor" :
                para.style.borderColor = pvalue
                break;
            
            default:
                break;
        }
    })
}

// // change p font-family
// var fontFamily = document.querySelectorAll('[name="fontFamily"]')
// for (var i = 0; i < fontFamily.length; i++) {
//     fontFamily[i].addEventListener("click", FontFamily)
// }
// function FontFamily(e){
//     para.style.fontFamily = e.target.value
// }


// // change p text-align
// var textAlign = document.querySelectorAll('[name="textAlign"]')
// for (var i = 0; i < textAlign.length; i++) {
//     textAlign[i].addEventListener("click", TextAlign)
// }
// function TextAlign(e){
//     para.style.textAlign = e.target.value
// }

// // change p line-height
// var lineHeight = document.querySelectorAll('[name="lineHeight"]')
// for (var i = 0; i < lineHeight.length; i++) {
//     lineHeight[i].addEventListener("click", LineHeight)
// }
// function LineHeight(e){
//     para.style.lineHeight = e.target.value
// }

// // change p letter-spacing
// var letterSpacing = document.querySelectorAll('[name="letterSpacing"]')
// for (var i = 0; i < letterSpacing.length; i++) {
//     letterSpacing[i].addEventListener("click", LetterSpacing)
// }
// function LetterSpacing(e){
//     para.style.letterSpacing = e.target.value
// }

// // change p text-indent
// var textIndent = document.querySelectorAll('[name="textIndent"]')
// for (var i = 0; i < textIndent.length; i++) {
//     textIndent[i].addEventListener("click", TextIndent)
// }
// function TextIndent(e){
//     para.style.textIndent = e.target.value
// }

// // change p text-transform
// var textTransform = document.querySelectorAll('[name="textTransform"]')
// for (var i = 0; i < textTransform.length; i++) {
//     textTransform[i].addEventListener("click", TextTransform)
// }
// function TextTransform(e){
//     para.style.textTransform = e.target.value
// }

// // change p text-decoration
// var textDecoration = document.querySelectorAll('[name="textDecoration"]')
// for (var i = 0; i < textDecoration.length; i++) {
//     textDecoration[i].addEventListener("click", TextDecoration)
// }
// function TextDecoration(e){
//     para.style.textDecoration = e.target.value
// }

// // change p border-style
// var borderStyle = document.querySelectorAll('[name="borderStyle"]')
// for (var i = 0; i < borderStyle.length; i++) {
//     borderStyle[i].addEventListener("click", BorderStyle)
// }
// function BorderStyle(e){
//     para.style.borderStyle = e.target.value
// }

// // change p border-color
// var borderColor = document.querySelectorAll('[name="borderColor"]')
// for (var i = 0; i < borderColor.length; i++) {
//     borderColor[i].addEventListener("click", BorderColor)
// }
// function BorderColor(e){
//     para.style.borderColor = e.target.value
// }
