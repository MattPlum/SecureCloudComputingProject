const mongoose = require("mongoose")
const Document = require("./Document")
const PORT = process.env.PORT || 3001;

//mongoose connection for persisting documents
/*mongoose.connect("mongodb://mongo:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})*/

var connectWithRetry = function() {
  return mongoose.connect("mongodb://mongodb:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err) {
      if (err) {
          console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
          setTimeout(connectWithRetry, 1000);
      }
      else {
        console.log("connection successful to mongoDB");
      }

      
  });
};
connectWithRetry();

const io = require("socket.io")(PORT, {
  cors: {
    origin: PORT,
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

///
async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}
