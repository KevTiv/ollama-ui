use ollama_rs::Ollama;
use crate::ollama::OllamaApiImpl;

mod ollama;


#[tokio::main]
async fn main() {
    let ollama = Ollama::new("http://localhost".to_string(), 11434);

    tauri::Builder::default()
        .invoke_handler(taurpc::create_ipc_handler(
            OllamaApiImpl::OllamaApi.into_handler()),
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}