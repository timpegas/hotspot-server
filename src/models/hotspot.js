import mongoose, { Schema } from 'mongoose';
<<<<<<< HEAD

const Hotspot = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    hotspotDate: {
      type: Date
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: '_Location'
    }
  },
  {
    timestamps: true
  },
  {
    usePushEach: true
  }
);

=======
import mongoosePaginate from 'mongoose-paginate';

const Hotspot = new Schema(
  {
    text: { type: String, required: true },
    description: { type: String, required: true },
    loc: {
      lng: { type: Number },
      lat: { type: Number }
    },
    city: { type: String },
    country: { type: String },
    validity: { type: Number },
    valid: { type: Boolean, default: true },
    file: { type: Object },
    views_count: { type: Number },
    comments_count: { type: Number },
    user: {
      id: { type: String },
      username: { type: String }
    },
    created_at: { type: Date }
  },
  { collection: 'hotspots' }
);

Hotspot.plugin(mongoosePaginate);

>>>>>>> exp
export default mongoose.model('Hotspot', Hotspot);
