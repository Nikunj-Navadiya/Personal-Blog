import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {

  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-400'}`} onClick={onPinNote} />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="mt-4 flex flex-wrap gap-2">
                {tags && tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500"></div>

        <div className="flex item-center gap-2">
            <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit}/>
            <MdDelete className="icon-btn hover:text-red-500" onClick={onDelete}/>
        </div>


      </div>
    </div>
  );
};

export default NoteCard;