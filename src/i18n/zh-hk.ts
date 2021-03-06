import { I18nTags } from '@/constant'

const oauth = {
  [I18nTags.oauth.form_brand]: '布穀鳥 Plus',
  [I18nTags.oauth.login_hint]: '授權登錄',
  [I18nTags.oauth.server_input_label]: 'Mastodon 連結',
  [I18nTags.oauth.please_input_server_url]: '請輸入 Mastodon 連結',
  [I18nTags.oauth.please_input_correct_server_url]: '請輸入準確的 Mastodon 連結',
  [I18nTags.oauth.register_app_error_message]: '請檢查目標連結是否準確',
  [I18nTags.oauth.confirm_input]: '確認'
}

const common = {
  [I18nTags.common.status_visibility_public]: '公共',
  [I18nTags.common.status_visibility_unlisted]: '公開',
  [I18nTags.common.status_visibility_private]: '關注者',
  [I18nTags.common.status_visibility_direct]: '私人訊息',
  [I18nTags.common.status_visibility_public_desc]: '在公共時間軸顯示',
  [I18nTags.common.status_visibility_unlisted_desc]: '公開，但不在公共時間軸顯示',
  [I18nTags.common.status_visibility_private_desc]: '只有關注你用戶能看到',
  [I18nTags.common.status_visibility_direct_desc]: '只有提及的用戶能看到',
}

const statusCard = {
  [I18nTags.statusCard.post_new_status_placeholder]: '你有什麼新動態？',
  [I18nTags.statusCard.reply_to_main_status]: '新增留言…',
  [I18nTags.statusCard.reply_to_replier]: '回覆',
  [I18nTags.statusCard.cancel_post]: '取消',
  [I18nTags.statusCard.submit_post]: '發佈',
  [I18nTags.statusCard.show_content]: '顯示內容',
  [I18nTags.statusCard.hide_content]: '隱藏內容',
  [I18nTags.statusCard.mute_status]: '忽略',
  [I18nTags.statusCard.delete_status]: '刪除',
  [I18nTags.statusCard.delete_status_confirm]: '你確定要刪除這則訊息嗎？',
  [I18nTags.statusCard.do_delete_status_btn]: '刪除',
  [I18nTags.statusCard.cancel_delete_status_btn]: '取消',
  [I18nTags.statusCard.originally_shared_by]: '最初由{displayName}<span class="at-name">@{atName}</span>分享',
  [I18nTags.statusCard.sensitive_media_alert]: '隐藏內容 <br/> 點擊顯示'
}

const drawer = {
  [I18nTags.drawer.home]: '主頁',
  [I18nTags.drawer.public]: '跨站時間軸',
  [I18nTags.drawer.tag]: '標籤',
  [I18nTags.drawer.profile]: '個人檔案',
  [I18nTags.drawer.settings]: '設定',
  [I18nTags.drawer.toHostInstance]: '前往當前實例站點'
}

const settings = {
  [I18nTags.settings.general_label]: '一般',
  [I18nTags.settings.choose_theme]: '選擇主題：',
  [I18nTags.settings.choose_language]: '選擇語言：',
  [I18nTags.settings.use_multi_line_mode]: '使用多行佈局模式：',
  [I18nTags.settings.show_sensitive_media_files]: '總是顯示標記為敏感的媒體文件：',
  [I18nTags.settings.auto_load_new_status]: '總是自動加載最新嘟文：',
  [I18nTags.settings.stream_label]: '訊息串',
  [I18nTags.settings.media_label]: '媒體內容'
}

const timeLines = {
  [I18nTags.timeLines.no_load_more_status_notice]: '你已看完了所有訊息',
  [I18nTags.timeLines.new_message_notice]: '{count}條新訊息'
}

const postStatusDialog = {
  [I18nTags.postStatusDialog.do_discard_message_confirm]: '確定要捨棄這則訊息嗎？',
  [I18nTags.postStatusDialog.do_keep_message]: '保留',
  [I18nTags.postStatusDialog.do_discard_message]: '捨棄'
}

export default {
  ...oauth,
  ...common,
  ...statusCard,
  ...timeLines,
  ...drawer,
  ...settings,
  ...postStatusDialog
}
