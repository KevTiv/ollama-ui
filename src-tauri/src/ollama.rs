#[taurpc::procedures]
trait OllamaApi {
    async fn create_model();
    async fn model_list();
    async fn model_info();
    async fn push_model();
    async fn pull_model();
    async fn delete_model();
    async fn generate();
    async fn generate_stream();
}

#[derive(Clone)]
pub(crate) struct OllamaApiImpl;

#[taurpc::resolvers]
impl OllamaApi for OllamaApiImpl {
    async fn create_model(self){
        println!("create_model");
    }
    async fn model_list(self) {
        println!("model_list");
    }
    async fn model_info(self) {
        println!("model_info");
    }
    async fn push_model(self) {
        println!("push_model");
    }
    async fn pull_model(self) {
        println!("pull_model");
    }
    async fn delete_model(self) {
        println!("delete_model");
    }
    async fn generate(self) {
        println!("generate");
    }
    async fn generate_stream(self) {
        println!("generate_stream");
    }
}