import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  Upload, 
  Edit, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Save,
  Users,
  Star
} from 'lucide-react';

// Simulated data and API calls
const fetchCourses = async () => {
  // Simulated API call
  return [
    { 
      id: 1, 
      title: 'Guitarra para Principiantes', 
      topics: [
        { id: 1, title: 'Introducción a la guitarra', videos: [{ id: 1, title: 'Partes de la guitarra' }] },
        { id: 2, title: 'Acordes básicos', videos: [{ id: 2, title: 'Acorde de Do mayor' }] }
      ],
      students: 150,
      rating: 4.7
    },
    { 
      id: 2, 
      title: 'Piano Intermedio', 
      topics: [
        { id: 3, title: 'Escalas avanzadas', videos: [{ id: 3, title: 'Escala de Do menor armónica' }] }
      ],
      students: 75,
      rating: 4.5
    }
  ];
};

const uploadVideo = async (file, courseId, topicId) => {
  // Simulated API call
  console.log(`Uploading video to course ${courseId}, topic ${topicId}`);
  return { id: Math.random(), title: file.name };
};

const MisCursos = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [expandedTopics, setExpandedTopics] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [isDraftMode, setIsDraftMode] = useState(false);

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };
    loadCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedTopic(null);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleVideoUpload = async (event, topicId) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(null);

    try {
      const uploadedVideo = await uploadVideo(file, selectedCourse.id, topicId);
      setCourses(courses.map(course => {
        if (course.id === selectedCourse.id) {
          return {
            ...course,
            topics: course.topics.map(topic => {
              if (topic.id === topicId) {
                return {
                  ...topic,
                  videos: [...topic.videos, uploadedVideo]
                };
              }
              return topic;
            })
          };
        }
        return course;
      }));
    } catch (error) {
      setUploadError('Error al subir el video. Por favor, inténtalo de nuevo.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleNewTopic = () => {
    if (!newTopicTitle.trim()) return;

    const newTopic = {
      id: Math.random(),
      title: newTopicTitle,
      videos: []
    };

    setCourses(courses.map(course => {
      if (course.id === selectedCourse.id) {
        return {
          ...course,
          topics: [...course.topics, newTopic]
        };
      }
      return course;
    }));

    setNewTopicTitle('');
    setSelectedTopic(newTopic);
  };

  const toggleTopicExpansion = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    if (draggedItem.type === targetItem.type && draggedItem.id !== targetItem.id) {
      const newCourses = [...courses];
      const course = newCourses.find(c => c.id === selectedCourse.id);
      const items = draggedItem.type === 'topic' ? course.topics : course.topics.find(t => t.id === selectedTopic.id).videos;
      const draggedIndex = items.findIndex(item => item.id === draggedItem.id);
      const targetIndex = items.findIndex(item => item.id === targetItem.id);
      const [reorderedItem] = items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, reorderedItem);
      setCourses(newCourses);
    }
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Mis Cursos</h1>
      <div className="flex mb-6">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Buscar cursos..."
            className="w-full bg-slate-800 text-slate-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-slate-400" />
        </div>
        <button className="bg-yellow-400 text-slate-900 rounded-lg px-4 py-2 font-semibold hover:bg-yellow-500 transition-colors">
          Nuevo Curso
        </button>
      </div>

      <div className="flex">
        <div className="w-1/3 pr-8">
          <h2 className="text-2xl font-semibold mb-4">Lista de Cursos</h2>
          <ul className="space-y-4">
            {filteredCourses.map(course => (
              <li 
                key={course.id}
                className={`bg-slate-800 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedCourse && selectedCourse.id === course.id ? 'ring-2 ring-yellow-400' : 'hover:bg-slate-700'
                }`}
                onClick={() => handleCourseSelect(course)}
              >
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-slate-400">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} estudiantes
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {course.rating.toFixed(1)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 bg-slate-800 rounded-lg p-6">
          {selectedCourse ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold">{selectedCourse.title}</h2>
                <div className="flex items-center">
                  <button 
                    className={`mr-4 px-4 py-2 rounded-lg font-semibold ${
                      isDraftMode ? 'bg-yellow-400 text-slate-900' : 'bg-slate-700 text-slate-100'
                    }`}
                    onClick={() => setIsDraftMode(!isDraftMode)}
                  >
                    {isDraftMode ? 'Modo Borrador' : 'Publicado'}
                  </button>
                  <button className="bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition-colors flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar Cambios
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Temas del Curso</h3>
                <ul className="space-y-4">
                  {selectedCourse.topics.map(topic => (
                    <li 
                      key={topic.id}
                      className="bg-slate-700 rounded-lg p-4"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { type: 'topic', id: topic.id })}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, { type: 'topic', id: topic.id })}
                    >
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleTopicExpansion(topic.id)}
                      >
                        <h4 className="text-lg font-semibold">{topic.title}</h4>
                        {expandedTopics[topic.id] ? <ChevronUp /> : <ChevronDown />}
                      </div>
                      {expandedTopics[topic.id] && (
                        <div className="mt-4 space-y-2">
                          {topic.videos.map(video => (
                            <div 
                              key={video.id}
                              className="flex items-center justify-between bg-slate-600 rounded p-2"
                              draggable
                              onDragStart={(e) => handleDragStart(e, { type: 'video', id: video.id })}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleDrop(e, { type: 'video', id: video.id })}
                            >
                              <span>{video.title}</span>
                              <div>
                                <button className="text-yellow-400 hover:text-yellow-500 mr-2">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="text-blue-400 hover:text-blue-500 mr-2">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-400 hover:text-red-500">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                          <div className="flex items-center mt-2">
                            <input
                              type="file"
                              id={`video-upload-${topic.id}`}
                              className="hidden"
                              onChange={(e) => handleVideoUpload(e, topic.id)}
                              accept="video/*"
                            />
                            <label
                              htmlFor={`video-upload-${topic.id}`}
                              className="cursor-pointer bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center"
                            >
                              <Upload className="w-4 h-4 mr-2" />
                              Subir Video
                            </label>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Añadir Nuevo Tema</h3>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Título del nuevo tema"
                    className="flex-grow bg-slate-700 text-slate-100 rounded-lg py-2 px-4 mr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                  />
                  <button
                    onClick={handleNewTopic}
                    className="bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition-colors flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Tema
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-slate-400 text-lg">Selecciona un curso para ver sus detalles y gestionar su contenido.</p>
          )}
        </div>
      </div>

      {isUploading && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <p className="text-xl mb-4">Subiendo video...</p>
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}

      {uploadError && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white rounded-lg px-4 py-2">
          
          {uploadError}
        </div>
      )}
    </div>
  );
};

export default MisCursos;