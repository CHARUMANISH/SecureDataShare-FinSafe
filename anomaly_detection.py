import numpy as np
from sklearn.ensemble import IsolationForest
import pandas as pd

class AnomalyDetector:
    def __init__(self):
        self.model = IsolationForest(contamination=0.01, random_state=42)
        self.is_trained = False

    def train(self, normal_data):
        """Train on normal access patterns"""
        self.model.fit(normal_data)
        self.is_trained = True

    def detect(self, new_data):
        """Return anomaly scores (-1 = anomaly)"""
        if not self.is_trained:
            raise Exception("Model not trained yet")
        return self.model.predict(new_data)

# Example usage
if __name__ == "__main__":
    # Simulate normal data (features: login_hour, request_size, location)
    np.random.seed(42)
    normal_data = np.random.normal(loc=0, scale=1, size=(1000, 3))
    
    detector = AnomalyDetector()
    detector.train(normal_data)
    
    # Test with new data
    test_data = np.array([[0.5, 0.3, 0.2], [10, 10, 10]])  # Second is anomaly
    print("Anomaly scores:", detector.detect(test_data))