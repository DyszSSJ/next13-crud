import React from "react";

const FormNewTask = ({
  onSubmit,
  setTitle,
  setDescription,
  title,
  description,
}) => {
  return (
    <form onSubmit={onSubmit} className="modal">
      <div className="modal__header">
        <span className="modal__title">New project</span>
      </div>
      <div className="modal__body">
        <div className="input">
          <label className="input__label">Project title</label>
          <input
            className="input__field"
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <p className="input__description">
            The title must contain a maximum of 32 characters
          </p>
        </div>
        <div className="input">
          <label className="input__label">Description</label>
          <textarea
            className="input__field input__field--textarea"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <p className="input__description">
            Give your project a good description so everyone know what&apos;s it
            for
          </p>
        </div>
      </div>
      <div className="modal__footer">
        <button className="button button--primary">Create project</button>
      </div>
    </form>
  );
};

export default FormNewTask;
