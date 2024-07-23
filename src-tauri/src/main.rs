// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod init;

fn main() {
    tauri::Builder::default()
        .setup(init::setup)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
