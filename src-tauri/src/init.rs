use anyhow::anyhow;
use tauri::{App, Manager};
use tracing_subscriber::{fmt, prelude::*, registry, EnvFilter};
use window_shadows::set_shadow;

pub fn setup(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let window = app
        .get_window("main")
        .ok_or(anyhow!("cannot get main window"))?;
    #[cfg(any(windows, target_os = "macos"))]
    set_shadow(&window, true).unwrap();

    Ok(())
}

pub fn init_logger() {
    let formatting_layer = fmt::layer()
        // .pretty()
        .with_thread_ids(false)
        .with_target(false)
        .with_writer(std::io::stdout);

    let env_layer = EnvFilter::try_from_env("WUWU_LOG").unwrap_or_else(|_| "info".into());

    registry().with(env_layer).with(formatting_layer).init();
}
