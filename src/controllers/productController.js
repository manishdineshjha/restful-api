const { Product } = require('../models');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).send({ error: 'Product not found' });
    }
    const updatedProduct = await Product.findByPk(req.params.id);
    res.send(updatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
