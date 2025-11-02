$(document).ready(function()
{
    /**
     * add like in post.
     */
    $('.likes').on('click','#btn_like_post',function (e){
        e.preventDefault();
        let id = $(this).data('id');
        let like_count = $(this).data('count');
        let currently_url = window.location.protocol + "//" + location.host +  "/";
        if (currently_url === 'http://localhost/')
        {
            currently_url += 'sahelbooks.com/';
        }
        $.ajax({
            type: 'GET',
            url: currently_url+`post_like/?id=${id}`,
            dataType: 'json',
            success: function(data)
            {
                let li =  $('#like_li');
                if (data === 1)
                {
                    let element = '<span id="post_count_like"> '+  ( Number(like_count) + 1 ) +' </span>' ;
                    let element2 =   '<i id="btn_like_post" data-count="'+(Number(like_count) + 1)+'" data-id="'+id+'" class="fas fa-heart mx-2"></i>' ;
                    li.empty();
                    li.append(element2,element);
                }else
                {
                    let element = '<span id="post_count_like"> '+  ( Number(like_count) - 1 ) +' </span>' ;
                    let element2 = '<i id="btn_like_post" data-count="' + (Number(like_count) - 1) + '" data-id="' + id +'" class="far fa-heart mx-2"></i>' ;
                    li.empty();
                    li.append(element2,element);
                }
            },
            error: function(data)
            {
                //console.log(data);
            }
        });
    });
});
