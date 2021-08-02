$(document).ready(function () {
    $('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(1)').click(function (e) {
        var mine = $('.mine').text('Собственное производство позволяет нам выставлять конкурентно не высокие цены, ниже рынка на 15-20% Контролировать на всех этапах качество изготовления мебели и сроки. ')
        $('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(1) > div.r-icon').css({
            'width': '178px',
            'height': '178px',
            'border': '1px solid #ebdbd4',
            'border-radius':'178px',
            'margin': '0 auto',
            'box-shadow':'0px 3px 12px rgba(0, 0, 0, .2)'

    })
    $('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(1) > div.r-icon > div.r-icon-bg').css({
        'background':'white url(/i/images/why_main/ico_1_blue.png) no-repeat center center'
    })
})

$('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(2)').click(function (e) {
    var mine = $('.mine').text('Прозрачное ценообразование').fadeout(1000)
})
$('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(3)').click(function (e) {
    var mine = $('.mine').text('Бесплатный подбор техники')
})
$('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(4)').click(function (e) {
    var mine = $('.mine').text('Гарантийное обслуживание до 5 лет')
})
$('body > div:nth-child(3) > div.container > div:nth-child(2) > div.col.reasons-main > div:nth-child(5)').click(function (e) {
    var mine = $('.mine').text('Сроки изготовления')
})
})

