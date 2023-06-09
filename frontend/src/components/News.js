import React, { useContext, useEffect } from "react";
import { ProductContext } from "../ProductContext";
import NewsCard from "./NewsCard"
 const News = () => {
    const [products, setProducts] = useContext(ProductContext)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/news")
        .then(resp => {
            return resp.json();
        }).then(results => {
                console.log(results)
            setProducts({"data": [...results.data]})
        })
    })

    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="/"><img
                      src="/log-IThub.ico"
                      alt="Logo"
                      width="95"
                    /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="/news">News</a></li>
                            <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="/login">Ling in</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {products.data.map((product) => (
            <div class="card_mb-3">
                <div class="card-body">
                            <div>
                                <h5 class="card-title">
                                <NewsCard
                                       title = {product.title}
                                       />
                                </h5>
                                    
                                </div>
                            <div>
                                <img src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2022-08/2022-06-06T190356Z_765158456_RC2IMU9YR922_RTRMADP_3_APPLE-DEVELOPER_0.JPG.jpg?itok=jK4DIHdY" class="card-img-top-new" alt="..." />
                            </div>
                                <p class="card-text">

                                    <NewsCard
                                    description={product.description}
                                    />                                      
                                    </p>
                            <p class="card-text"><small class="text-muted">
                                <NewsCard
                                uploaded_at={product.uploaded_at}
                                />
                                </small></p>
                      
                        </div>
                        
            </div>
            ))}
         
            
            
            <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default News;