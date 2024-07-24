use tauri::App;
use tracing_subscriber::{fmt, prelude::*, registry, EnvFilter};

pub fn setup(_app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
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
