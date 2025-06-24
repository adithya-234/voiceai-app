function calculateCost(text, emotion, metadata) {
  const baseRate = 0.12; 
  const duration = text.length / 1500; 
  
  
  const emotionMultipliers = { neutral: 1.0, joy: 1.2, anger: 1.5 };
  
  
  const qualityFactor = metadata.sampleRate / 24000;
  const throughputFactor = metadata.bitrate / 128;
  
  return baseRate * duration * emotionMultipliers[emotion] 
         * qualityFactor * throughputFactor;
}
