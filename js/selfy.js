// alert("test")


// ----- register01 基本プロフィールの登録 -----

//  【 出身地 】  国内→リスト選択  海外→テキスト入力

$(document).ready(function() {

    $(function() {
        $('[name="born-place"]:radio').change( function() {
          if($('[id=js_domestic]').prop('checked')){
            $('#js_born_overseas').hide();
            $('#js_born_domestic').show();
            } else if ($('[id=js_overseas]').prop('checked')) {
                $('#js_born_overseas').show();
                $('#js_born_domestic').hide();
            } 
    });
});



//   【 職業 】  詳細入力  選択項目で表示・非表示

    $(function() {
        $('#js-occupation').change( function() {
          if($('[id=js_business_person]').prop('selected')){
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } else if ($('[id=js_part_timer]').prop('selected')) {
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } else if ($('[id=js_company_executive]').prop('selected')) {
            $('#js_company_name').show();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } else if ($('[id=js_freelance]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').show();
            $('#js_school_name').hide();

        } else if ($('[id=js_professional]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').show();
            $('#js_school_name').hide();

        } else if ($('[id=js_student]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').show();

        } else if ($('[id=js_house_person]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } else if ($('[id=js_other_person]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } else if ($('[id=js_occupation_blanc]').prop('selected')) {
            $('#js_company_name').hide();
            $('#js_business_name').hide();
            $('#js_school_name').hide();

        } 
            
    });
});
});



//   登録ボタンのクリックでデータ登録 → LocalStorage

$("#js_register01_confirm").on('click', function(){

    const title01 = "氏名";
    const name01 = $("#js_name01").val();
    const title02 = "カナ";
    const name02 = $("#js_name02").val();
    const title03 = "生年月日";
    const birthday = $('#js_birthday').val()

    const title04 = "出身地";
    const place = $('[name="born-place"]:checked').val();
    const title05 = "都道府県";
    const prefecture = $('[name="prefecture"] option:selected').val();
    const title06 = "国名・地域";
    const country = $("#js_born_overseas").val();
    const title07 = "職業";
    const occupation = $('[name="occupation"] option:selected').val();
    const title08 = "勤務先";
    const company = $("#js_company").val();
    const title09 = "部署名・役職名";
    const division = $("#js_division").val();
    const title10 = "職種名";
    const description = $("#js_description").val();
    const title11 = "学校名";
    const school = $("#js_school").val();
    const title12 = "学部・学科";
    const grade = $("#js_grade").val();

    const title13 = "メールアドレス開示";
    const email_ok = $('[name="email"]:checked').val();
    const title14 = "メールアドレス";
    const email = $("#js_email").val();

    const title15 = "Facebook開示";
    const facebook_ok = $('[name="facebook"]:checked').val();
    const title16 = "Facebook";
    const facebook = $("#js_facebook").val();

    const title17 = "Instagram開示";
    const instagram_ok = $('[name="instagram"]:checked').val();
    const title18 = "Instagram";
    const instagram = $("#js_instagram").val();

    const title19 = "Twitter開示";
    const twitter_ok = $('[name="twitter"]:checked').val();
    const title20 = "Twitter";
    const twitter = $("#js_twitter").val();


    localStorage.setItem(title01, name01)
    localStorage.setItem(title02, name02)
    localStorage.setItem(title03, birthday)
    localStorage.setItem(title04, place)
    localStorage.setItem(title05, prefecture)
    localStorage.setItem(title06, country)
    localStorage.setItem(title07, occupation)
    localStorage.setItem(title08, company)
    localStorage.setItem(title09, division)
    localStorage.setItem(title10, description)
    localStorage.setItem(title11, school)
    localStorage.setItem(title12, grade)
    localStorage.setItem(title13, email_ok)
    localStorage.setItem(title14, email)
    localStorage.setItem(title15, facebook_ok)
    localStorage.setItem(title16, facebook)
    localStorage.setItem(title17, instagram_ok)
    localStorage.setItem(title18, instagram)
    localStorage.setItem(title19, twitter_ok)
    localStorage.setItem(title20, twitter);



//   登録ボタンのクリックで不要データの削除 → LocalStorage

if($('[id=js_domestic]').prop('checked')){
    // localStorage.removeItem(title05);
    localStorage.removeItem(title06);

} else if ($('[id=js_overseas]').prop('checked')) {
    localStorage.removeItem(title05);
    // localStorage.removeItem(title06);
} 

if($('[id=js_business_person]').prop('selected')){
    // localStorage.removeItem(title08);
    // localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_part_timer]').prop('selected')) {
    // localStorage.removeItem(title08);
    // localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_company_executive]').prop('selected')) {
    // localStorage.removeItem(title08);
    // localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_freelance]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    // localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_professional]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    // localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_student]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    // localStorage.removeItem(title11);
    // localStorage.removeItem(title12);

} else if ($('[id=js_house_person]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_other_person]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);

} else if ($('[id=js_occupation_blanc]').prop('selected')) {
    localStorage.removeItem(title08);
    localStorage.removeItem(title09);
    localStorage.removeItem(title10);
    localStorage.removeItem(title11);
    localStorage.removeItem(title12);
} 



//   登録ボタンのクリックで登録データの呼び出し＆入力欄の非表示 → HTML

$("#js_name01_area").html(localStorage.getItem(title01));
$("#js_name02_area").html(localStorage.getItem(title02));
$("#js_birthday_area").html(localStorage.getItem(title03));
$("#js_bornplace01_area").html(localStorage.getItem(title04));
$("#js_bornplace02_area").html(localStorage.getItem(title05));
// $("#js_input06").html(localStorage.getItem(title06));
$("#js-occupation_area").html(localStorage.getItem(title07));
$("#js_company_area").html(localStorage.getItem(title08));
$("#js_division_area").html(localStorage.getItem(title09));
$("#js_description_area").html(localStorage.getItem(title10));
$("#js_school_area").html(localStorage.getItem(title11));
$("#js_grade_area").html(localStorage.getItem(title12));
$("#js_email_area01").html(localStorage.getItem(title13));
$("#js_email_area02").html(localStorage.getItem(title14));
$("#js_facebook_area01").html(localStorage.getItem(title15));
$("#js_facebook_area02").html(localStorage.getItem(title16));
$("#js_instagram_area01").html(localStorage.getItem(title17));
$("#js_instagram_area02").html(localStorage.getItem(title18));
$("#js_twitter_area01").html(localStorage.getItem(title19));
$("#js_twitter_area02").html(localStorage.getItem(title20));

$('#js_company_name').hide();
$('#js_business_name').hide();
$('#js_school_name').hide();


});



// ----- register02 写真の登録 -----

//  写真スライダー

$('.photo-slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    
    responsive: [{
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        } 
    }]

});


// ----- register03 履歴書の登録 -----

function SelectBoxCreate(start, end){
    let str = "";
    for(let i=start; i<end; i++){
        str +- `<option>${i}</option>`;
    }
    return str;
}

    const year = SelectBoxCreate(1970,3000)
    const month = SelectBoxCreate(1,13)

    $("#js_graduate01").html(year)    
    $("#js_graduate02").html(month)    


