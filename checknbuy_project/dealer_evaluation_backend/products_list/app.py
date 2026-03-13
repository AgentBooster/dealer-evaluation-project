from flask import Flask
from flask_cors import CORS
import json

app = Flask("List of products")
CORS(app)

# Load data once at startup to improve performance and reduce disk I/O
with open("products.json", "r") as prodfile:
    products_data = json.load(prodfile)

@app.route("/products")
def getProductsList():
    products = [product["product"] for product in products_data["products"]]
    return {"products": products}

@app.route("/getdealers/<product>")
def getDealers(product):
    for productMeta in products_data["products"]:
        if productMeta["product"] == product:
            return {"dealers": productMeta["Dealers"]}
    
    return {"message": "Could not find dealers for this product"}, 404

if __name__=="__main__":
    app.run(debug=True) 
    # When no port is specified, starts at default port 5000

