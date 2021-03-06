var main = require('liblocalizelang');
var init = main.init;
var get = main.get;

var localeDictAnswers = {
  "app_name" : {},

  "scene_new_name": {},
  "scene_delete_confirm": {},

  "button_ok" : {},
  "button_cancel" : {},
  "button_confirm" : {},
  "button_save" : {},

  "edit_mode_edit_name" : {},
  "edit_mode_preview_name" : {},

  "button_save_project" : {},
  "button_publish_project" : {},

  "project_save_dialog_result_success" : {},

  "sound_upload_header" : {},
  "sound_change_btn" : {},
  "sound_upload_action_or" : {},
  "sound_record_btn" : {},
  "sound_choose_btn" : {},
  "sound_choose_open_failed" : {},
  "sound_stop_rec_btn" : {},
  "sound_record_failed" : {},
  "sound_upload_failed" : {},

  "sprite_backet_drop_upload_hint" : {},

  "node_props_text_header" : {},
  "node_props_duration_header" : {},
  "node_props_no_editing" : {},

  "player_autoplay_checkbox_header" : {},
  "player_autoplay_interval_header_before_input" : {},
  "player_autoplay_interval_header_after_input" : {},

  "project_publish_dialog_header" : {},
  "project_publish_dialog_option_clilk" : {},
  "project_publish_dialog_option_video" : {},
  "project_publish_dialog_option_storyboard" : {},
  "project_publish_dialog_hint_select_option" : {},

  "project_publisher_concurrency_error" : {},
  "project_publisher_couldnt_save_project" : {},
  "project_publisher_autoplay_required": {},

  "project_publisher_clilk_working" : {},
  "project_publisher_clilk_finished" : {"htmlHypLink": "WWW.EXAMPLE.COM"},

  "project_publisher_storyboard_safari_not_supported" : {"newLine": "\n"},
  "project_publisher_storyboard_nothing_to_do" : {},
  "project_publisher_storyboard_couldnt_finish" : {},
  "project_publisher_storyboard_creating_archive" : {},
  "project_publisher_storyboard_done" : {"snapshotsCount": 18},
  "project_publisher_storyboard_progress" : {"cntDone": 18, "cntOverall": 42},

  "project_publisher_video_chrome_browser_required" :
    {},
  "project_publisher_video_progress_start" : {},
  "project_publisher_video_progress" : {"secsDone": 18, "secsOverall": 42},
  "project_publisher_video_done" : {"minsCaptured": 18, "secsCaptured": 42},
  "project_publisher_video_work_estim" : {"mins": 18, "secs": 42},

  "project_publisher_audio_doing_rec_setup" : {},
  "project_publisher_audio_couldnt_prepare_sound_bufs" : {},
  "project_publisher_audio_couldnt_start_audio_recording" : {},
  "project_publisher_audio_progress" : {
    "secsCaptured": 18,
    "secsOverall": 42,
	},
  "project_publisher_audio_finished" : {},

  "project_publisher_audio_video_av_merge_not_allowed" : {"avmErrorMsg": "Agh! Bird! Bird! Kill it! It's evil!"},
  "project_publisher_audio_video_finished" : {},

  "project_publisher_audio_video_merger_reg_merge" : {},
  "project_publisher_audio_video_merger_couldnt_start_merge" : {},
  "project_publisher_audio_video_merger_uploading_video" : {},
  "project_publisher_audio_video_merger_couldnt_upload_video" : {},
  "project_publisher_audio_video_merger_uploading_audio" : {},
  "project_publisher_audio_video_merger_couldnt_upload_audio" : {},
  "project_publisher_audio_video_merger_merging" : {},
  "project_publisher_audio_video_merger_couldnt_finish_merge" : {},
  "project_publisher_audio_video_merger_downloading" : {},
  "project_publisher_audio_video_merger_download_progress" : {"percCompleted": 18},
  "project_publisher_audio_video_merger_video_too_long" :
    {},

  "image_mini_editor_dialog_header" : {},
  "image_mini_editor_dialog_tool_mwand_confirm_action" : {},
  "image_mini_editor_dialog_tool_crop_confirm_action" : {},
  "image_mini_editor_dialog_tool_erase_confirm_action" : {},

  "nodes_toolbar_create_hint_phrase" : {},
  "nodes_toolbar_create_hint_free_trans" : {},
  "nodes_toolbar_create_hint_play_sound" : {},
  "nodes_toolbar_create_hint_label" : {},
  "nodes_toolbar_create_hint_notification" : {},
  "nodes_toolbar_create_hint_wait_and_go" : {}
};

var localeDictKeys = [
  "app_name" ,

  "scene_new_name",
  "scene_delete_confirm",

  "button_ok" ,
  "button_cancel" ,
  "button_confirm" ,
  "button_save" ,

  "edit_mode_edit_name" ,
  "edit_mode_preview_name" ,

  "button_save_project" ,
  "button_publish_project" ,

  "project_save_dialog_result_success" ,

  "sound_upload_header" ,
  "sound_change_btn" ,
  "sound_upload_action_or" ,
  "sound_record_btn" ,
  "sound_choose_btn" ,
  "sound_choose_open_failed" ,
  "sound_stop_rec_btn" ,
  "sound_record_failed" ,
  "sound_upload_failed" ,

  "sprite_backet_drop_upload_hint" ,

  "node_props_text_header" ,
  "node_props_duration_header" ,
  "node_props_no_editing" ,

  "player_autoplay_checkbox_header" ,
  "player_autoplay_interval_header_before_input" ,
  "player_autoplay_interval_header_after_input" ,

  "project_publish_dialog_header" ,
  "project_publish_dialog_option_clilk" ,
  "project_publish_dialog_option_video" ,
  "project_publish_dialog_option_storyboard" ,
  "project_publish_dialog_hint_select_option" ,

  "project_publisher_concurrency_error" ,
  "project_publisher_couldnt_save_project" ,
  "project_publisher_autoplay_required",

  "project_publisher_clilk_working" ,
  "project_publisher_clilk_finished" ,

  "project_publisher_storyboard_safari_not_supported" ,
  "project_publisher_storyboard_nothing_to_do" ,
  "project_publisher_storyboard_couldnt_finish" ,
  "project_publisher_storyboard_creating_archive" ,
  "project_publisher_storyboard_done" ,
  "project_publisher_storyboard_progress" ,

  "project_publisher_video_chrome_browser_required" ,
  "project_publisher_video_progress_start" ,
  "project_publisher_video_progress" ,
  "project_publisher_video_done" ,
  "project_publisher_video_work_estim" ,

  "project_publisher_audio_doing_rec_setup" ,
  "project_publisher_audio_couldnt_prepare_sound_bufs" ,
  "project_publisher_audio_couldnt_start_audio_recording" ,
  "project_publisher_audio_progress" ,
  "project_publisher_audio_finished" ,

  "project_publisher_audio_video_av_merge_not_allowed" ,
  "project_publisher_audio_video_finished" ,

  "project_publisher_audio_video_merger_reg_merge" ,
  "project_publisher_audio_video_merger_couldnt_start_merge" ,
  "project_publisher_audio_video_merger_uploading_video" ,
  "project_publisher_audio_video_merger_couldnt_upload_video" ,
  "project_publisher_audio_video_merger_uploading_audio" ,
  "project_publisher_audio_video_merger_couldnt_upload_audio" ,
  "project_publisher_audio_video_merger_merging" ,
  "project_publisher_audio_video_merger_couldnt_finish_merge" ,
  "project_publisher_audio_video_merger_downloading" ,
  "project_publisher_audio_video_merger_download_progress" ,
  "project_publisher_audio_video_merger_video_too_long" ,

  "image_mini_editor_dialog_header" ,
  "image_mini_editor_dialog_tool_mwand_confirm_action" ,
  "image_mini_editor_dialog_tool_crop_confirm_action" ,
  "image_mini_editor_dialog_tool_erase_confirm_action" ,

  "nodes_toolbar_create_hint_phrase" ,
  "nodes_toolbar_create_hint_free_trans" ,
  "nodes_toolbar_create_hint_play_sound" ,
  "nodes_toolbar_create_hint_label" ,
  "nodes_toolbar_create_hint_notification" ,
  "nodes_toolbar_create_hint_wait_and_go" 
];

function onReady(err) {
	if(!err) {
		for(var i = 0; i < localeDictKeys.length; ++i) {
			console.log(get(localeDictKeys[i], localeDictAnswers[localeDictKeys[i]]));
		}
	}
}

init(main.LOCALES.EN, '../', onReady);
