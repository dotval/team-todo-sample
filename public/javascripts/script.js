$(function(){
  // 有料登録ポップアップの表示
  setTimeout(function() {
    $('#modal').fadeIn();
  }, 5000);
  $('.closeModalButton').click(function() {
    $('#modal').fadeOut();
  });

  // ToDo追加フォームの内容のクリア
  $('#clearFormButton').click(function() {
    $('#todoTitle').val('');
    $('#todoContent').val('');
    return false;
  });

  // ToDoの完了
  $('.complete-button').click(function() {
    if(confirm('このタスクを完了してよろしいですか？')){
      return true;
    } else {
      return false;
    }
  });
});