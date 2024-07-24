// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tracing::info;

mod init;

fn main() {
    init::init_logger();
    info!("wuwu!");

    tauri::Builder::default()
        .setup(init::setup)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
