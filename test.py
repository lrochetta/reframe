from nnext import NNextClient
from nnext.client.http import Distance

nnclient = NNextClient(host="localhost", port=6040)

nnclient.recreate_collection(
    collection_name="movie_collection",
    vector_size=100,
    distance=Distance.COSINE
)

from pprint import pprint
my_collection_info = nnclient.http.collections_api.get_collection("movie_collection")
pprint(my_collection_info.dict())
