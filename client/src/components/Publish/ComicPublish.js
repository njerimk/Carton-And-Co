import React, { useState } from 'react';

const ComicCreationDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [genres, setGenres] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    // Handle file upload for cover image
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleGenreChange = (e) => {
    // Handle genre selection
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setGenres(selectedGenres);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend, create comic)
    console.log({ title, description, coverImage, genres });
    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setCoverImage(null);
    setGenres([]);
  };

  return (
    <div className="comic-creation-dashboard">
      <h1>Create New Comic</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} required />
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} required></textarea>
        <label>Cover Image:</label>
        <input type="file" accept="image/*" onChange={handleCoverImageChange} required />
        <label>Genres:</label>
        <select multiple value={genres} onChange={handleGenreChange} required>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          <option value="action">Action</option>
          {/* Add more genre options */}
        </select>
        <button type="submit">Create Comic</button>
      </form>
    </div>
  );
};

export default ComicCreationDashboard;
