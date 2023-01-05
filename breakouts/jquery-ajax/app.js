$(document).ready(function () {
  console.log('Hi!');

  const handleClick = () => {
    console.log('hello from button!');

    $.ajax({
      method: 'GET',
      url: 'https://shibe.online/api/shibes',
    })
      .then((res) => {
        const newImgSrc = res[0];
        $('#shiba-img').attr('src', newImgSrc);
      })
      .catch((err) => console.log(err));
  };

  $('#btn-change-img').click(handleClick);
});
