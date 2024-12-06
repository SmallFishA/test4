$(document).ready(function(){
    const $itemList = $('#item-list');//获取列表
    const $images = $('.hidden-image');//获取所有图片

    $itemList.on('mouseover','li',function(){
        $images.hide();

        const index = $(this).index();

        $images.eq(index).show();
    });
});