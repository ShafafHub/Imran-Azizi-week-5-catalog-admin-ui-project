import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const { search, category } = req.query;

  let query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query).populate("category");

  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, price, category, description } = req.body;

  const product = await Product.create({
    name,
    price,
    category,
    description
  });

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};