import { Request, Response } from 'express';
import { prisma } from '../config/prismaClient';

export interface AuthenticatedRequest extends Request {
    user?: any; 
}

// TODO - log operations (user_id, article_id, operation, timestamp)


// GET /api/articles/ - Get all articles
export const getAllArticles = async (req: Request, res: Response) => {
    try {
        const articles = await prisma.article.findMany();
        res.status(200).json(articles);
    } catch (error) {
        console.log('Error fetching articles:', error);
        res.status(500).json({ message: 'Server Error: error fetching articles', error: error });
    } finally {
        await prisma.$disconnect();
    }
}


// GET /api/articles/categories - Get article categories
export const getArticleCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.articleCategory.findMany();
        res.status(200).json(categories);

    } catch (error) {
        console.log('Error fetching article categories:', error);
        res.status(500).json({ message: 'Server Error: error fetching article categories', error: error });    
    }
};

// GET /api/articles/:id - Get a single article by ID
export const getArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const article = await prisma.article.findUnique({
            where: { article_id: id },
        })

        if (!article) {
            res.status(404).json({ error: 'Article not found' });
            return; 
        }

        res.status(200).json(article);  
        return;
    } catch (error) {
        console.log('Error fetching article:', error);  
        res.status(500).json({ message: 'Server Error: error fetching article', error: error });
    } finally {
        await prisma.$disconnect();
    }
}
    
// POST /api/articles/ - Create a new article
export const createArticle = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { title, content, imageURL, audience, status, type, author } = req.body;
        const email = req.user.decodedClaims.email;


        const authorId = await prisma.user.findUnique({
            where: { email: email },
            select: { user_id: true }
        })

        const newArticle = await prisma.article.create({
            data: {
                title: title,
                content: content,
                author_id: authorId?.user_id,
                imageUrl: imageURL ? imageURL : '',
                audience: audience,
                status: status,
                type: type,
                author: author,
            }
        });

        res.status(201).json({ message: 'Article created successfully' });
    } catch (error) {
        console.log('Error creating article:', error);
        res.status(500).json({ message: 'Server Error: error creating article', error: error });
    } finally {
        await prisma.$disconnect();
    }
}   


// PATCH /api/articles/:id - Update an article by ID. This is a partial update
// export const updateArticle = async (req: Request, res: Response) => {};


// PUT /api/articles/:id - Update an article by ID. This is a full update
export const updateArticle = async (req: Request, res: Response) => {
    try {
        const { article_id } = req.params;
        const { title, content, author_id, imageURL, audience, status } = req.body;

        const updatedArticle = await prisma.article.update({
            where: { article_id: article_id },
            data: {
                title: title,
                content: content,
                author_id: author_id,
                imageUrl: imageURL,
                audience: audience,
                status: status,
            }
        }); 

        res.status(200).json(updatedArticle);
        return;                
    } catch (error) {
        console.log('Error updating article:', error);
        res.status(500).json({ message: 'Server Error: error updating article', error: error });
        return;
    }
};

// DELETE /api/articles/:id - Delete an article by ID
export const deleteArticle = async (req: Request, res: Response) => {
    try {
        const { article_id } = req.params;

        await prisma.article.delete({
            where: { article_id: article_id }
        });

        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error: error deleting article', error: error });
    }
};