import React from "react";
import axios from "axios";
import ArticleCard from "../../components/Post/ArticleCard";
import NavBar from "@/app/components/navbar/NavBar";
import CustomFooter from "@/app/components/footer/CustomFooter";

interface Article {
  id: number;
  documentId?: string;
  title: string;
  description: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  cover?: { url: string };
  author?: { name: string; avatar?: { url: string } };
}

const fetchArticles = async (): Promise<Article[]> => {
  try {
    const res = await axios.get(
      "https://cms-kisite-production.up.railway.app/api/articles?populate=*",
    );
    return res.data.data.map((article: any) => ({
      id: article.id,
      documentId: article.documentId,
      title: article.title,
      description: article.description,
      slug: article.slug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      cover: article.cover ? { url: article.cover.url } : undefined,
      author: article.author
        ? {
            name: article.author.name,
            avatar: article.author.avatar
              ? { url: article.author.avatar.url }
              : undefined,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
};

const Teste01 = async () => {
  const articles = await fetchArticles();
  return (
    <div className="mt-28 lg:mt-56">
      <NavBar />
      <div className="container mx-auto p-6">
        <h1 className="mb-6 text-2xl font-bold">Blog</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Teste01;
